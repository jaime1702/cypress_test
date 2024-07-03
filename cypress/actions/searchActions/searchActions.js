/// <reference types="Cypress" />

import '@testing-library/cypress/add-commands';

class SearchActions {
  filter(searchData) {
    cy.get('#searchInput').should('be.visible').clear().type(searchData.country).type('{enter}');
  }

  validateFilter(searchData) {
    cy.get('#firstHeading').contains(searchData.country).should('be.visible');
  }
}

export default new SearchActions();
