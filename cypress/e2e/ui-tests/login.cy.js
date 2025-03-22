/// <reference types="cypress" />

import loginPage from "../../fixtures/pom/login.page";

const Username = "standard_user";
const Password = "secret_sauce";
const textProducts = "Products";
const fakeUsername = "Semiankiv";
const errorMessage =
  "Epic sadface: Username and password do not match any user in this service";

describe("Login", () => {
  beforeEach(() => {
    //Navigate to the login page ;
    cy.visit("https://www.saucedemo.com/");
  });

  it("TC01, Successful Login with Valid Credentials", () => {
    loginPage.loginAsAStandardUser(Username, Password);
    // cy.get("#user-name").type(Username).should("be.visible"); //Filling out the Username;
    // cy.get("#password").type(Password).should("be.visible"); //Filling out the Password;
    // cy.get("#login-button").click(); //Click on the Login button;
    loginPage.title.should("have.text", textProducts); //Verifying the text on the page;
  });

  it("TC02, Error Message for Invalid Credentials", () => {
    loginPage.loginWithFakeUsername(fakeUsername, Password, errorMessage);
    // cy.get("#user-name").type(fakeUsername).should("be.visible"); //Filling out the Username;
    // cy.get("#password").type(Password).should("be.visible"); //Filling out the Password;
    // cy.get("#login-button").click(); //Click on the Login button;
    // cy.get('[data-test="error"]').should("have.text", errorMessage); //Verifying the error message;
  });

  it("TC03, Password Input Masking", () => {
    loginPage.verifyThePasswordInputMasking(Password);
    // cy.get("#password").type(Password);
    // cy.get("#password").should("have.value", Password);
    // cy.get("#password").should("have.css", "-webkit-text-security"); //Verifying that CSS property is hidden;
  });
});
