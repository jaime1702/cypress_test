const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  screenshotOnRunFailure: true,
  redirectionLimit: 100,
  video: false,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'cypress_test',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: 'https://www.wikipedia.org/',
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
});
