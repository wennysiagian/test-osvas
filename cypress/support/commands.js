// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';
{
    Cypress.Commands.add("loginLandlord", (Email, Password) => {
        cy.get('a[class="btn btn-clean"]').click()
        cy.get('input[placeholder="info@osvas.com"]').type(Email)
        cy.get('input[placeholder="Password"]').type(Password)
        cy.get('button[class="btn btn-sign btn-secondary w-100"]').click()
        cy.get('button[class="close"]').click()
        cy.url().should('include', ('/me'))
    }),
    Cypress.Commands.add('loginAdmin', () => {
        cy.get('input[id="email"]').type(Cypress.config('AdminEmail')).should('have.value', Cypress.config('AdminEmail'))
        cy.get('input[id="password"]').type(Cypress.config('AdminPassword'))
        cy.get('button').contains('Login').click() 
        cy.url().should('include', '/')
      })
}

import hasElement from '../plugins/hasElement.js';
  Cypress.Commands.add('hasElement', hasElement);
