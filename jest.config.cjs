module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // ✅ required for DOM testing
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ✅ uses jest.setup.ts
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
};
