workflow "Test and Build" {
  on = "push"
  resolves = ["Build Package", "Build Image"]
}

workflow "Test, Build, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "lint"
}

action "Test" {
  needs = "Install"
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "test --ci"
}

action "Build Package" {
  needs = ["Install", "Lint", "Test"]
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "build"
}

action "Build Image" {
  needs = ["Build Package"]
  uses = "actions/docker/cli@master"
  args = "build ."
}

action "Install Semantic Release" {
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "global add semantic-release"
}

action "Publish Filter" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

 action "Publish Package" {
  needs = ["Build Package", "Publish Filter"]
  uses = "docker://node:10.16-alpine"
  runs = "yarn"
  args = "global run semantic-release --dry-run"
  secrets = ["NPM_TOKEN", "GH_TOKEN"]
 }

action "Publish" {
  needs = ["Publish Package"]
  uses = "docker://alpine"
}
