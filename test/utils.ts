import path from "path"
import uuid4 from "uuid4"
import tmp from "temp-dir"

export * from "ts-jest/utils"
export const timeout = 10000 * 5
export const tmpDir = path.join(tmp, uuid4())
