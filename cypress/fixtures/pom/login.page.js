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

  loginAsAStandardUser(username, password, text) {
    this.inputUsername.type(username).should("be.visible");
    this.inputPassword.type(password).should("be.visible");
    this.buttonLogin.click();
    this.title.should("have.text", text);
  }

  loginWithFakeUsername(username, password, errorMessage) {
    this.inputUsername.type(username).should("be.visible");
    this.inputPassword.type(password).should("be.visible");
    this.buttonLogin.click();
    this.errorField.should("have.text", errorMessage);
  }

  verifyThePasswordInputMasking(password) {
    this.inputPassword
      .type(password)
      .should("have.value", password)
      .should("have.css", "-webkit-text-security");
  }
}

export default new Login();
