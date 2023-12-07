describe("Css-LOcators" , () => {
 
   it("Test01",() => {

    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("#Wikipedia1_wikipedia-search-input").type("Tejas");
    
    cy.get("input.wikipedia-search-button").click();

    
   })
})