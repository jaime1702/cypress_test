/// <reference types="Cypress" />

import '@testing-library/cypress/add-commands';

class SearchActions {
  filter(searchData) {
    cy.get('#searchInput').should('be.visible').clear().type(searchData.country);
  }

  searchButton() {
    cy.get('button[type="submit"]').should('be.visible').click();
  }

  validateFilter(searchData) {
    cy.get('.vector-header').should('be.visible');
    cy.get('#firstHeading').contains(searchData.country).should('be.visible');
  }
}

export default new SearchActions();
