import path from "path"

import execa from "execa"
import uuid from "uuid/v4"
import tmpDir from "temp-dir"
import fs from "fs-extra"
import glob from "glob"

export * from "ts-jest/utils"

export const timeout = 1000 * 5
export const temporaryDirectory = path.join(tmpDir, uuid())
export const rootDir = path.resolve(__dirname, "..")
export const testDir = path.resolve(__dirname)
export const buildDirectory = path.resolve(rootDir, "build")
export const fixturesDirectory = path.resolve(__dirname, "./__fixtures__")

export function getFixtures() {
  return glob
    .sync(`${fixturesDirectory}/*`)
    .filter(match => fs.lstatSync(match).isDirectory)
}

export function getFixture(fixtureName: string): string {
  return path.resolve(fixturesDirectory, fixtureName)
}

export async function cloneFixture(fixtureName: string): Promise<string> {
  const fixture = getFixture(fixtureName)
  const isDirectory = (await fs.lstat(fixture)).isDirectory()
  const destination = path.join(
    temporaryDirectory,
    `${uuid()}.${path.basename(fixture)}`
  )

  if (isDirectory) {
    await fs.emptyDir(destination)
  }

  await fs.copy(fixture, destination, {
    filter: file => !/node_modules/.test(file),
  })

  return destination
}

export async function prepareFixture(fixtureName: string): Promise<string> {
  const destination = await cloneFixture(fixtureName)
  await execa("yarn", ["install"], {
    cwd: destination,
    stdio: ["ignore", "ignore", "inherit"],
  })
  return destination
}
