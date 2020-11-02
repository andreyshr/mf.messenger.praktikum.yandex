module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'jest-ts-webcompat-resolver',
  testMatch: [ "**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)" ]
};
