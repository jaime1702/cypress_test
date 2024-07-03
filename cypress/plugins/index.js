/// <reference types="cypress" />

const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  getCompareSnapshotsPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
};
