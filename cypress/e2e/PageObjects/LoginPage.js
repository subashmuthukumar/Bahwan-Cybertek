class LoginPage {

    inputUserName() {
      return cy.get('#inputEmail')
    }
    inputPassword(){
        return cy.get('#inputPassword')
    }
    btnSubmit(){
        return cy.get('button.login-btn.action-btn.blue.block')
    }
  }
  export default LoginPage;
  