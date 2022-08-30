


describe("login/logout functionalities for a Bynder portal.", () => {
  it("Go to the login page", () => {
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.get("#inputEmail").type("subash.m@balbhas.com");
    cy.get("#inputPassword").type("Subiksha@1995");
    cy.get("button.login-btn.action-btn.blue.block").click();
  });

  it("Go to the landing page and Logout", () => {
    cy.get("a.admin-dropdown.profile").click();
    cy.get("button.action-btn.block.blue").click();
  });

  it("Login with valid username and invalid Password",()=>{
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.get("#inputEmail").type("subash.m@balbhas.com");
    cy.get("#inputPassword").type("WrongPassword");
    cy.get("button.login-btn.action-btn.blue.block").click();
  })

  it("Login with invalid username and valid Password",()=>{
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.get("#inputEmail").type("test.m@balbhas.com");
    cy.get("#inputPassword").type("Subiksha@1995");
    cy.get("button.login-btn.action-btn.blue.block").click();
  })
});
