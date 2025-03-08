/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

describe("PUT Requests", () => {
  it("TC04, Verify that updating a post return 200", () => {
    cy.request("PUT", baseUrl + "/1", {
      userId: "Maksym Semiankiv",
      id: 1,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // it("TC05, Successful deletion returns 200", () => {
  //   cy.request({
  //     method: "DELETE",
  //     url: "https://jsonplaceholder.typicode.com/posts/1",
  //   }).then((response) => {
  //     expect(response.status).to.equal(200);
  //   });
  // });
});
