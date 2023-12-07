describe('MySuite',function(){

    it('Screenshots Videos',function(){
        cy.visit("https://demo.opencart.com/");

        /*
        cy.screenshot("HomePage");
        cy.get("img[title='Your Store']").screenshot("Logo");
        */

        // Automatically Recording video screenshots
        cy.get(':nth-child(7) > .nav-link').click();

        cy.get("div[id='content'] h2").should('have.text','Tabletsss');
    })
})