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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
Cypress.Commands.add('login', (registeredEmail, regPwd) => { 

    cy.visit('')
    cy.get("div[class='panel header'] li[data-label='or'] a").click()
    cy.get("email").type(registeredEmail)
    cy.get("#pass").type(regPwd)
    cy.get('#send2 span , .email span').click()
    cy.get('body.account.customer-account-index.page-layout-2columns-left:nth-child(2) div.page-wrapper:nth-child(5) header.page-header div.panel.wrapper div.panel.header ul.header.links li.customer-welcome span.customer-name > button.action.switch.selectorgadget_selected').click()

     })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })