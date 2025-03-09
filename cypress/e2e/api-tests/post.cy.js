/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com";
let postResponseUserId;

describe("POST Requests", () => {
  it("API-01, Successful creation returns 201 Created with the new post object", () => {
    cy.request("POST", baseUrl + "/posts", {
      userId: "Semiankiv",
      id: 1,
      title: "Testove SoftOnix",
      body: "Made by MS"
    }).then((response) => {
      postResponseUserId = response.body.userId;
      expect(response.status).to.equal(201);
      expect(postResponseUserId).to.equal("Semiankiv");
    });
  });

  it("API-02, Missing fields should return 400 error", () => {
    //We made a POST request without Id and Body;
    cy.request(
      {
        method: "POST",
        url: baseUrl + "/posts",
      },
      {
        userId: "Semiankiv",
        title: "Testove SoftOnix"
      }
    ).then((response) => {
      expect(response.status).to.be.equal(400); //But the response is 201 !!!
    });
  });
});
