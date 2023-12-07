
describe("Xpath Locators",()=>{

    it("Test01",()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        cy.xpath("//div[@class='picture']/a/img").should('have.length',6);
    })

    it("Test02",()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        cy.xpath("//div[@class='picture']").xpath("./a/img").should('have.length',6);
    })
})