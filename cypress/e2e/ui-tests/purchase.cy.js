/// <reference types="cypress" />
import loginPage from "../../fixtures/pom/login.page";
import purchasePage from "../../fixtures/pom/purchase.page";
import Credentials from "../../fixtures/data/purchase/credentials.json";

describe("Purchase", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.loginAsAStandardUser(Credentials.Username, Credentials.Password);
  });

  it("TC04, Complete Flow for Purchasing", () => {
    purchasePage.purchaseTheProduct(
      Credentials.FirstName,
      Credentials.LastName,
      Credentials.PostalCode
    );
    //Verify the Complete Purchase Message;
    purchasePage.header2.should(
      "have.text",
      Credentials.CompletePurchaseMessage
    );
    cy.contains(Credentials.CompletePurchaseMessage).should("be.visible");
  });
});
