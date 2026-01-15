import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "<rootDir>/tsconfig.jest.json"
    }
  },
  moduleNameMapper: {
    "^(.+)\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts"
  }
};

export default config;