/* eslint-disable no-unused-vars */
import './commands';
require('cypress-plugin-tab');

Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;
});

after(() => {
  cy.task('generateReport');
});
