import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test|spec-e2e).ts',
  ],
};
export default config;
