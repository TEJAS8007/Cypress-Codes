import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

/// <reference types ="Cypress"/>

describe("Mouseaction",function(){

    it.skip("Mouse_Over",function(){

        cy.visit("https://demo.opencart.com/");

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');

        // trigger method will used to trigger events
        // method will triger event written....
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');
    })

    it.skip("Right_Click_Action",function(){

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        // contextmenu used to rightclick any elements
        //1 st Approach
        /*
        cy.get('.context-menu-one').trigger('contextmenu');

        cy.get('.context-menu-icon-edit').should('be.visible');
        */
        // Another way is using RightClick method directly
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-edit').should('be.visible');
    })

    it.skip("Double-click",function(){

        cy.visit("https://demo.guru99.com/test/simple_context_menu.html");

        // to double Click use dblclick in trigger method
        cy.get('button').trigger('dblclick');
    })

    it('Test Case6', function (){
        
        cy.visit("https://jqueryui.com/droppable/");
        // frame loading
        cy.frameLoaded('.demo-frame');
        //shifting focus
        cy.iframe().find("#draggable").should('be.visible');
        cy.iframe().find("#droppable").should('be.visible');

        cy.wait(2000);

        cy.iframe().find("div#draggable").drag("#droppable",{force:true});
     });
})