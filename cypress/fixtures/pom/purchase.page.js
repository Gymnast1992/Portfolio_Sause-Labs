class Purchase {
    get itemSauseLabsBackpack() {return cy.get('[id="add-to-cart-sauce-labs-backpack"]')};
    get container() {return cy.get('[id="shopping_cart_container"]')};
    get buttonCheckout() {return cy.get('[id="checkout"]')};
    get inputFirstName() {return cy.get('[id="first-name"]')};
    get inputLastName() {return cy.get('[id="last-name"]')};
    get inputPostalCode() {return cy.get('[id="postal-code"]')};
    get buttonContinue() {return cy.get('[id="continue"]')};
    get buttonFinish() {return cy.get('[id="finish"]')};
    get header2() {return cy.get("h2.complete-header")};

    purchaseTheProduct(FirstName, LastName, PostalCode) {
        this.itemSauseLabsBackpack.click();
        this.container.click();
        this.buttonCheckout.click();
        this.inputFirstName.type(FirstName);
        this.inputLastName.type(LastName);
        this.inputPostalCode.type(PostalCode);
        this.buttonContinue.click();
        this.buttonFinish.click();
    }
}

export default new Purchase();