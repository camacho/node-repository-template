import { config } from "../config"

export async function start(): Promise<void> {
  console.log(`Running in ${config.get("env")} mode`)
}
