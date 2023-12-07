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
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

require('cypress-iframe')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

/// <reference types="cypress-xpath" />

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

// custom commands cliking on link using label
Cypress.Commands.add('Click_Link',(label)=>{
    cy.get('a').contains(label).click();
})

// over write Contains Command
/*
Cypress.Commands.overwriteQuery('contains',(originalFn,subject,filter,text,options ={})=>{
    //determines whether if filter argument passed

    if(typeof text === 'object') {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject,filter,text,options)
})
*/
// login Action Command

Cypress.Commands.add('Login_Test',(email,password) =>{

    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("button[class='button-1 login-button']").click();
})
