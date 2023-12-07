/// <reference types="Cypress" />

describe("Checking UI Button",function(){
/*
    it("radio Button",function(){
       
        cy.visit("https://testautomationpractice.blogspot.com/");

        //male button
        cy.get("input#male").should('be.visible');

        //female Button
        cy.get("input#female").should('be.visible');

        //selecting radio Buttons(Male)
        //check method will click on button
        cy.get("input#male").check().should('be.checked');

        //female button when male button checked
        cy.get("input#female").should('not.be.checked');

        //checking female radio button
        cy.get("input#female").check().should('be.checked');

        //Now checking status of male button when female button checked
        cy.get("input#male").should('not.be.checked');

    })
*/
    it("Checkboxes",function(){
       
        cy.visit("https://testautomationpractice.blogspot.com/");

        //selecting checkox

        cy.get("input#monday").should('be.visible');

        cy.get("input#monday").check().should('be.checked');

        //unchecking sleected text box
        //uncheck method will uncheck previosly checked checkBox
        cy.get("input#monday").uncheck().should('not.be.checked');

        //selecting All check_boxes
        cy.get("input.form-check-input[type='checkbox']").check();

        //imposing Assertions
        cy.get("input.form-check-input[type='checkbox']").should('be.checked');

        //unchecking all checked check_boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck();
        cy.get("input.form-check-input[type='checkbox']").should('not.be.checked');

        //checking and Unchecking first and last CheckBoxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');

        if(cy.get("input#male").should('not.be.checked')){
            cy.get("input#male").check();
        }
        if(cy.get("input.form-check-input[type='checkbox']").first().should('be.checked')){
            cy.get("input.form-check-input[type='checkbox']").first().uncheck();
        }

        if(cy.get("input.form-check-input[type='checkbox']").last().should('be.checked')){
            cy.get("input.form-check-input[type='checkbox']").last().uncheck();
        }

       
    })
})