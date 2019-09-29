import mockConsole from "jest-mock-console"

let restoreConsole
beforeEach(() => {
  restoreConsole = mockConsole()
})

afterEach(() => {
  restoreConsole()
})
