import LoginPage from "../PageObjects/LoginPage";
import Login from "../PageObjects/LoginPage"

describe('POM',()=>{

    before(()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })

    it('Pom_Test',function() {

        const ln=new Login();

        cy.fixture('HRM.json').then((data)=>{

            ln.setUsername(data.username);
            ln.setPassword(data.password);
            ln.clickLogin();
            ln.Verify_DashBoard();
        })

    })

    after(()=>{
        cy.go('back');
    })
})