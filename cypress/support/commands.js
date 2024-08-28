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
    cy.xpath("//div[@class='panel header']//a[contains(text(),'Sign In')]").click()
    cy.get("email").type(registeredEmail)
    cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type(regPwd)
    cy.get('#send2 span , .email span').click()


     })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })