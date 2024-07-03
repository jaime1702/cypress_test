const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
const { THRESHOLD, setName } = require('./utils');
compareSnapshotCommand();

Cypress.Commands.add('compareScreenShot', (name) => {
  const retryOptions = {
    limit: 2, // max number of retries
    delay: 500, // delay before next iteration, ms
  };
  if (!Cypress.config('isInteractive')) {
    cy.compareSnapshot(setName(name), THRESHOLD, retryOptions);
  }
});
