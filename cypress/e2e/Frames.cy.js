import 'cypress-iframe'
/// <reference types ="Cypress"/>

describe("Handling Frames",function(){

    it.skip("Frames Test_1",function(){

        cy.visit("https://the-internet.herokuapp.com/iframe");

       const iframe=cy.get("#mce_0_ifr")
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap);

       iframe.clear().type("welcome{cmd+a}");
       
       cy.get("[aria-label='Bold']").click();
    })

    it.skip("Frames Test_2",function(){

        cy.visit("https://the-internet.herokuapp.com/iframe");

        //frames is being returned by the Command in commands.js
        cy.getIframe("#mce_0_ifr").clear().type("Welcome");
    })

    it("Frames Test_3_Using_cypress_frame_pluggin",function(){

        cy.visit("https://the-internet.herokuapp.com/iframe");

       //fame-Loaded command comes after installing cypress-Frames pluggin
       //Frame-Loaded command will basically load frames 
        cy.frameLoaded("#mce_0_ifr");
        
        cy.getIframe("#mce_0_ifr").clear().type('Welcome');
    })
})