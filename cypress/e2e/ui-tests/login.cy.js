/// <reference types="cypress" />

import loginPage from "../../fixtures/pom/login.page";
import data from "../../fixtures/data/data.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01, Successful Login with Valid Credentials", () => {
    loginPage.loginAsAStandardUser(data.Username, data.Password);
    loginPage.title.should("have.text", data.textProducts);
  });

  it("TC02, Error Message for Invalid Credentials", () => {
    loginPage.loginWithFakeUsername(data.fakeUsername, data.Password);
    loginPage.errorField.should("have.text", data.errorMessage);
  });

  it("TC03, Password Input Masking", () => {
    loginPage.typePassword(data.Password);
    loginPage.inputPassword.should("have.value", data.Password);
    //Verifying that CSS property is hidden;
    loginPage.inputPassword.should("have.css", "-webkit-text-security");
  });
});
