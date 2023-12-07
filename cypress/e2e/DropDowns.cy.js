
/// <reference types="Cypress"/>

describe("DropDowns_Select_Tag",function(){
   //Automating Dropdown with select Tags
    
   it.skip("Select tag",function(){
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     cy.get("select#dropdown-class-example")
     .select('Option1')
     .should('have.value','option1');

   })

   it.skip("Dropdowns without select Tag",function(){

     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

     cy.get("span#select2-billing_country-container").click();
     
     cy.get(".select2-search__field").type('India').type('{enter}');
   })

   it.skip("Auto Suggest DropDown",function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("input#autocomplete").type('ind');

    cy.get("ul#ui-id-1 li").contains('British Indian Ocean Territory').click();

    //putting Assertion on Value selected
    cy.get("input#autocomplete").should('have.text','British Indian Ocean Territory');

   })

   it("Second Auto Suggested Dropdown",function(){

    cy.visit("https://www.google.com");

    cy.get("textarea[name='q']").type('cypress');

    cy.get("div.pcTkSc").each(($el,index, $list)=>{

      if($el.text()=='cypress automation'){
        cy.wrap($el).click();
      }
    })
   })
   
})