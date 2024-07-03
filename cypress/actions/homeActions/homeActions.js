/// <reference types="Cypress" />

class Home {
  homePage() {
    cy.intercept('/').as('homePage');
    cy.visit('/');
    cy.wait('@homePage');
  }
}

export default new Home();
