

describe("Test1",() => {

    it("test",()=>{
        cy.visit("https://www.google.com")
        console.log(cy.title.toString());        
        console.log(cy.url.toString());
        
        console.log("Test Passed...");
    })
})