/// <reference types ="Cypress"/>

describe("Child Tab",function(){

    it.skip("child Tab Demo_First_Way",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("a[class='btn-style class1 class2']").invoke('removeAttr','target').click();

        console.log(cy.title());
        console.log(cy.url());

        cy.wait(3000);

        cy.go('back');
    })

    it("child Tab Demo_First_Way",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("a[class='btn-style class1 class2']").then((e)=>{

          let url=e.prop('href');
          cy.visit(url);
        })
    })
})