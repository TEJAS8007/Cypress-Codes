/// <reference types ="Cypress"/>

describe('Fixtures_Test_Suite',function(){

    it.skip('Direct_Accesing_Test',function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

        cy.get('.oxd-button').click();

        cy.get('.oxd-userdropdown-name').should('have.text','Test 13 Collings');
    })

    it.skip('Using_Fixtures_Test',function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('OranageHrm.json').then((data)=>{

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);

            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.Password);

            cy.get('.oxd-button').click();

            cy.get('.oxd-userdropdown-name').should('have.text',data.name);

        })        
    })

    // Creating hooks To Access Fixtures...
    /*
    let userData;

    before(()=>{
        cy.fixture('OranageHrm.json').then((data)=>{

            userData=data;
        })
    })

    */

    it.skip('Using Hooks_Test',function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username);

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.Password);

        cy.get('.oxd-button').click();

        cy.get('.oxd-userdropdown-name').should('have.text',userData.name);
    })

    it('Data_Driven_Test',function(){

        cy.fixture("OranageHrm").then((data)=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

           data.forEach(userinfo => {
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userinfo.username);

            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userinfo.Password);
    
            cy.get('.oxd-button').click();

            if(userinfo.username=='Admin' && userinfo.Password=='admin123') {
                
              //  cy.get('.oxd-userdropdown-name').should('have.text',userinfo.name);
                cy.get('.oxd-userdropdown-tab').click();
        
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
            }
           
            else{

                cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text',userinfo.name);

            }

           });
        })

    })
})