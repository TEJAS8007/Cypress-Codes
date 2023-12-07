class LoginPage {

    txtUsername="input[name='username']";
    txtPassword="input[name='password']";
    btnSubmit="button[type='submit']";
    labelText="span.oxd-topbar-header-breadcrumb h6";

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    setPassword(Password) {
        cy.get(this.txtPassword).type(Password);
    }

    clickLogin(){
        cy.get(this.btnSubmit).click();
    }

    Verify_DashBoard() {
        cy.get(this.labelText).should('have.text','Dashboard');
    }
}

export default LoginPage;