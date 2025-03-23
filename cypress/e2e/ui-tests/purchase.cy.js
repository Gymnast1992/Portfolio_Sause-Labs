/// <reference types="cypress" />
import loginPage from "../../fixtures/pom/login.page";
import purchasePage from "../../fixtures/pom/purchase.page";
import data from "../../fixtures/data/purchase/data.json";

describe("Purchase", () => {
  beforeEach(() => {
    cy.visit("/");
    //Login as a standard user;
    loginPage.loginAsAStandardUser(data.Username, data.Password);
  });

  it("TC04, Complete Flow for Purchasing", () => {
    purchasePage.purchaseTheProduct(
      data.FirstName,
      data.LastName,
      data.PostalCode
    );
    //Verify the Complete Purchase Message;
    purchasePage.header2.should(
      "have.text",
      data.CompletePurchaseMessage
    );
  });
});
