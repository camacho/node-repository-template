import fs from "fs-extra"
import chalk from "chalk"

import { temporaryDirectory } from "./utils"

export default async function globalSetup() {
  console.log("\n📂 Setting up temporary directory")
  await fs.emptyDir(temporaryDirectory)
  console.log(`${chalk.green("✔")}  Directory setup`)
}
