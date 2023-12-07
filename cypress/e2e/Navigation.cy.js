
describe('suite',function(){

    it('Navigation Test',function(){

        cy.visit("https://demo.opencart.com/");

        cy.title().should('eq','Your Store');

        cy.get(':nth-child(7) > .nav-link').click();

        cy.get("div[id='content'] h2").should('have.text','Cameras');


        cy.go('back');// back to home page

        cy.title().should('eq','Your Store');

        // again to camera page
        cy.go('forward');
        cy.get("div[id='content'] h2").should('have.text','Cameras');

        cy.go(-1);

        // reloading page
        cy.reload();
    })
})