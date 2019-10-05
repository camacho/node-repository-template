module.exports = {
  preset: "ts-jest",
  coveragePathIgnorePatterns: [
    "<rootDir>/test",
    "<rootDir>/build",
    "<rootDir>/dist",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  globalSetup: "<rootDir>/test/globalSetup.ts",
  globalTeardown: "<rootDir>/test/globalTeardown.ts",
  moduleDirectories: ["<rootDir>/node_modules"],
  moduleFileExtensions: ["ts", "js"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/test/__fixtures__/",
  ],
  verbose: true,
  watchPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/test/__fixtures__/",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-master",
  ],
}
