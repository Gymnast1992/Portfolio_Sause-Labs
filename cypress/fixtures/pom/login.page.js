class Login {
  get inputUsername() {
    return cy.get("#user-name");
  }
  get inputPassword() {
    return cy.get("#password");
  }
  get buttonLogin() {
    return cy.get("#login-button");
  }
  get title() {
    return cy.get('[class="title"]');
  }
  get errorField() {
    return cy.get('[data-test="error"]');
  }

  loginAsAStandardUser(username, password) {
    this.inputUsername.type(username).should("be.visible");
    this.inputPassword.type(password).should("be.visible");
    this.buttonLogin.click();
  }

  loginWithFakeUsername(username, password) {
    this.inputUsername.type(username).should("be.visible");
    this.inputPassword.type(password).should("be.visible");
    this.buttonLogin.click();
  }

  typePassword(password) {
    this.inputPassword.type(password);
  }
}

export default new Login();
