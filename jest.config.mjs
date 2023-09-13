export default {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.mjs',
    '**/?(*.)+(spec|test|spec-e2e).mjs',
  ],
  transform: {},
  transformIgnorePatterns: [],
};
