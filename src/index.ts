#!/usr/bin/env node

import { start } from "./lib"

process.title = "Application"

start()
  .catch(error => {
    console.error(error.message || error)
    process.exit(error.exitCode || 1)
  })
  .finally(() => process.exit())
