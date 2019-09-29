import convict from "convict"
import dotenv from "dotenv"

// Load dotfile
dotenv.config()

// Use typeof to include schema

// Define schema
export const config = convict({
  env: {
    doc: "The application environment",
    default: "development",
    env: "NODE_ENV",
    format: ["production", "test", "development"],
  },
  log: {
    level: {
      doc: "The output log level",
      default: "INFO",
      env: "LOG_LEVEL",
      format: ["DEBUG", "INFO", "ERROR"],
    },
  },
})

export type Config = typeof config

// Perform validation
config.validate({ allowed: "strict" })
