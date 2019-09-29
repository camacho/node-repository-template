module.exports = {
  preset: "ts-jest",
  coveragePathIgnorePatterns: ["<rootDir>/test"],
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
  verbose: true,
  globalTeardown: "<rootDir>test/globalTeardown.ts",
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  moduleFileExtensions: ["ts", "js"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  snapshotSerializers: ["jest-snapshot-serializer-ansi"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-master",
  ],
}
