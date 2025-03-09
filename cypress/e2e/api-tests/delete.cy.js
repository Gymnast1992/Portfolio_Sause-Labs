/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

describe("DELETE Requests", () => {
  it("TC07, Verify that successful deletion returns 200", () => {
    cy.request({
      method: "DELETE",
      url: baseUrl + "/1",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("TC08, Verify that deletion of non-existent post returns 404", () => {
    cy.request({
      method: "DELETE",
      url: baseUrl + "/posts/007",
      failOnStatusCode: false, // Prevent Cypress from failing automatically on 404
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
