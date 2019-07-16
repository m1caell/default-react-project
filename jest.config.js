module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules'],
  modulePaths: ['src'],
  rootDir: 'src',
  moduleNameMapper: {
    '^app-helpers(.*)$': '<rootDir>/helpers$1'
  },
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each']
}
