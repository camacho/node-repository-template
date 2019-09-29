import fs from "fs-extra"

import { tmpDir } from "./utils"

export default async function globalTeardown() {
  console.log("🧹 Cleaning up...")
  await fs.remove(tmpDir)
  console.log("👏 Cleanup done")
}
