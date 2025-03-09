/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com";
let post;

describe("GET Requests", () => {
  it("API-03, Get all posts returns 200 OK with a list of posts", () => {
    cy.request({
      method: "GET",
      url: baseUrl + "/posts",
    }).then((response) => {
      expect(response.status).to.equal(200);

      response.body.forEach((post) => {
        expect(post).to.have.property("id").that.is.a("number").and.gt(0);
        expect(post).to.have.property("title").that.is.a("string").and.not
          .empty;
        expect(post).to.have.property("body").that.is.a("string");
      });
    });
  });

  it("API-04, Non-existent post returns 404 Not Found", () => {
    cy.request({
      method: "GET",
      url: baseUrl + "/posts/007",
      failOnStatusCode: false, // Prevent Cypress from failing automatically on 404
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
