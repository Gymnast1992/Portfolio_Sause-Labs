/// <reference types="cypress" />

const Username = "standard_user";
const Password = "secret_sauce";
const FirstName = "Maks";
const LastName = "Semiankiv";
const PostalCode = "1699";
const completePurchaseMessage = "Thank you for your order!";

describe("Purchase", () => {
  beforeEach(() => {
    //Login as a standard user;
    //Navigate to the login page;
    cy.visit("/");
    //Fill out the input fields with the valid credentials;
    cy.get("#user-name").type(Username);
    cy.get("#password").type(Password);
    //Click on the button Login;
    cy.get("#login-button").click();
  });

  it("TC04, Complete Flow for Purchasing", () => {
    //Click on the Sause Labs Backpack listing;
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click();
    //Click on the Shopping cart conteiner;
    cy.get('[id="shopping_cart_container"]').click();
    //Click on the button Checkout;
    cy.get('[id="checkout"]').click();
    //Fill out the input fields;
    cy.get('[id="first-name"]').type(FirstName);
    cy.get('[id="last-name"]').type(LastName);
    cy.get('[id="postal-code"]').type(PostalCode);
    //Click on the button Continue;
    cy.get('[id="continue"]').click();
    //Click on the button Finish;
    cy.get('[id="finish"]').click();
    //Verify the Complete Purchase Message;
    cy.get("h2.complete-header").should("have.text", completePurchaseMessage);
  });
});
