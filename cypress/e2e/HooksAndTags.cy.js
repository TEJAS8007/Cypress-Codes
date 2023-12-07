/// <reference types ="Cypress" />
/*
  Hooks in Cypress
  1)After
  2)Before
  3)BeforeEach
  4)AfterEach
*/
describe("MyTestSuite",function(){

    before(()=>{
        cy.log("Launching Application***************");
    })

    after(()=>{
        cy.log("closing Application*****************");
    })

    beforeEach(()=>{
        cy.log("Login**********");
    })


    afterEach(()=>{
        cy.log("Logout***********");
    })

    it('search',function(){
        
        cy.log("Search Test************************");
    })

    it('Advanced_search',function(){
        
        cy.log("Advanced Search Test************************");
    })

    it('Listing_Products',function(){
        
        cy.log("Listing Products Test************************");
    })
})