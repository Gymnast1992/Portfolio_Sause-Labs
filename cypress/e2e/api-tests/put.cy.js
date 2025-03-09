/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

describe("PUT Requests", () => {
  it("TC05, Verify that updating a post return 200", () => {
    cy.request("PUT", baseUrl + "/1", {
      userId: "Maksym Semiankiv",
      id: 1,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("TC06, Verufy thast updating a non-existent post returns 404", () => {
    cy.request({
      method: "PUT",
      url: baseUrl + "/1000",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);//The response is 500 !
    });
  });
});
