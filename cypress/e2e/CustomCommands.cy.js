/// <reference types ="Cypress" />
describe('Custom_Commands',function(){

    it.skip('Handling_Links',function(){
        cy.visit('https://demo.nopcommerce.com/');
        
        cy.Click_Link('Apple MacBook Pro 13-inch');

        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');
    })

    it.skip('Overriding_Existing_Commands',function(){

        cy.visit('https://demo.nopcommerce.com/');
        
        cy.Click_Link('Apple MacBook Pro 13-inch');

        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');
    })

    it('Login_Commands',function(){

        cy.visit('https://demo.nopcommerce.com/');
        
        cy.Click_Link('Log in');

       cy.Login_Test('Test@2gmail.com','test123');

       cy.get('.ico-account').should('have.text','My account');
    })
})