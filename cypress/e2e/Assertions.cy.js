const { expect } = require("chai");

describe("Assertion Demo",()=>{

    it("ImplicitAssetion",()=>{

        cy.visit("https://demowebshop.tricentis.com/");
        //should and
       // cy.url().should('include','//demowebshop.tricentis.com')
       // cy.url().should('eq','https://demowebshop.tricentis.com/')
       // cy.url().should('contain','demowebshop');

       //Another way of doing Same thing As above mentioned
       //  cy.url().should('include','//demowebshop.tricentis.com')
       // .should('eq','https://demowebshop.tricentis.com/')
       // .should('contain','demowebshop');

        //using And instead of Using Should multiple times

         cy.url().should('include','//demowebshop.tricentis.com')
        .and('eq','https://demowebshop.tricentis.com/')
        .and('contain','demowebshop');

        //Negative Assertion

        cy.url().should('include','//demowebshop.tricentis.com')
        .and('eq','https://demowebshop.tricentis.com/')
        .and('not.contain','demowebshopRegister')//Negative Assertion

        cy.title().should('include','Demo Web Shop')
        .and('contain','Shop')
        .and('eq','Demo Web Shop');

        //Assertions On Element of WebPage

        cy.get('.header-logo > a > img').should('be.visible');

        //Assertion on Links on WebPage

        cy.xpath("//a").should('have.length',95);

        cy.get("input#small-searchterms").type("Apple");

        //Value Check
        cy.get("input#small-searchterms").should('have.value','Apple');

    })

    it("ExplicitAssertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.get("input[name='username']").type("Admin");

        cy.get("input[name='password']").type("admin123");

        cy.xpath("//button[@type='submit']").click();

        let expName="Test50 Nikola";

        cy.get(".oxd-userdropdown-name").then((x)=>{
          let actName=  x.text();

          //BDD Style....Assertions
          //Positive_Assertion
          expect(actName).to.equal(expName);

          //Negative_Assertion
          expect(actName).to.not.equal(expName);

          //TDD Style..Assertions
          //Positive_Assertion
          assert.equal(actName,expName);

          //Negative_Assertions
          assert.notEqual(actName,expName);

          /*
             two types of Assertion Supported by Cypress 
             1)implicit Assertion--- implemented by Should & and Keyword
             2)Explicit Assertion--- implemnted by user function
                                     assert and expect keyword is used...

             get method for css Locators...
             xapth method for xpath locators...
             locator can be single or chained locators....
          */

        })
     })
})