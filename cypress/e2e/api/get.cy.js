/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("GET Requests", () => {
  it("TC03, Should get all posts", () => {
    cy.request("GET", baseUrl + "/posts").then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("TC04, Non-existent post returns 404 Not Found", () => {
    cy.request({
      method: "GET",
      url: baseUrl + "/posts/007",
      failOnStatusCode: false, // Prevent Cypress from failing automatically on 404
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
