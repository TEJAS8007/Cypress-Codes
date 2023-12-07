
/// <reference types ="Cypress"/>

describe("Alerts Handling",function(){

    it.skip("Test--Simple_Alert",function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get(':nth-child(1) > button').click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
            
        })

        cy.get("#result").should('have.text','You successfully clicked an alert');
    })

    it.skip("Confirmation_Alert",function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        });
        //window automatically closed by cypress ..default it click on ok button
        
        cy.get("#result").should('have.text','You clicked: Ok');
    })

    it.skip("Confirmation_Alert_Using cancel Button",function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get(':nth-child(2) > button').click();
        
        //earlier click ok.. now clicking cancel
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        });
 
        // if we press cancel button then make function as false...
        cy.on('window:confirm',(t)=>false)        
        //window automatically closed by cypress ..default it click on ok button
        
        cy.get("#result").should('have.text','You clicked: Cancel');
    })

    it.skip("prompt_Alert",function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

       //folowing block will active before alert window
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome');
        })

        cy.get(':nth-child(3) > button').click();

        //cypress will automatically close alert window

        cy.get("#result").should('have.text','You entered: Welcome');
    })

    it.skip("prompt_Alert_Cancel button",function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

       //folowing block will active before alert window
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome');
        })

        cy.get(':nth-child(3) > button').click();

        //cypress will automatically close alert window but we want to click cancel button

        cy.on('window:prompt',()=> false);

        cy.get("#result").should('have.text','You entered: Welcome');
    })

    it.skip("prompt_Alert_Basic_Auth",function(){
        //Approach 1
         
        cy.visit("https://the-internet.herokuapp.com/basic_auth",
        {auth:
              {
               username:"admin",
               password:"admin"
              }
              });
   
              cy.get('p').should('eq','Congratulations! You must have the proper credentials.');
    })

    it("prompt_Alert_Basic_Auth",function(){
        //Approach 2
         
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
       
    })
})