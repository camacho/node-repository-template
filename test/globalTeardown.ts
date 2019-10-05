import fs from "fs-extra"
import chalk from "chalk"

import { temporaryDirectory } from "./utils"

export default async function globalTeardown() {
  console.log("🗑  Removing temporary files")
  await fs.remove(temporaryDirectory)
  console.log(`${chalk.green("✔")}  Cleanup finished`)
}
