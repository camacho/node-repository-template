# Node Template

## Installation

## Usage

## Development

The repository comes with several built in tools to help maintain the package. All the scripts are run through `yarn`.

### Building

To create a fresh build of the application, run:

```sh
yarn build
```

To go into watch mode (which is not necessary for testing):

```sh
yarn watch
```

### Testing

Testing is done through [`jest`](https://jestjs.io/), and any of the framework's normal [CLI flags](https://jestjs.io/docs/en/cli) can be passed through by running:

```sh
yarn test
# for watching
yarn test --watch
```

### Formatting

To help remove any worries about content consistency, formatting is managed automatically with [`prettier`](https://github.com/prettier/prettier), and [`format-package`](https://github.com/camacho/format-package).

These formatters can be run with:

```sh
yarn format
```

### Linting

The linters can be run with:

```sh
yarn lint
```

#### Code

Code linting is handled through [TSLint](https://github.com/palantir/tslint) and uses the [Microsoft recommended TSLint rules](https://github.com/Microsoft/tslint-microsoft-contrib) along with the [Prettier TSLint configuration](https://github.com/prettier/tslint-config-prettier).

#### Commit Messages

Commit messages are linted with [`commitlint`](https://github.com/conventional-changelog/commitlint) to help with consistency and enable [`semantic-release`](https://github.com/semantic-release/semantic-release) in the future.

### Git Hooks

A series of GitHooks have been setup and are managed through [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged). These hooks automate dependency installation, formatting, testing, commit linting, and a host of other behavior.

### GitHub Actions

In the [`main.workflow`](/.github/main.workflow) file is a workflow that installs, tests, and builds the package on each push of code. This workflow can be used for PR checks.
