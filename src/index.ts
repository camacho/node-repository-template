#!/usr/bin/env node

import { start } from "./lib"

process.title = "Application"
start()
  .then(() => {
    process.exit()
  })
  .catch(error => {
    console.error(error.message || error)
    process.exit(1)
  })
