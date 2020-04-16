/// <reference types="cypress" />
import { Username } from '../support/globals'
describe('page', () => {
  beforeEach(() => {
    cy.testAsync().then(() => {
      // ISSUE : Should log John Doe since I am setting the global inside the command but
      // instead prints Test which is the initial value of the global variable
      cy.log(Username.username);
    })
  });
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
