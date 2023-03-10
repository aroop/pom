import loginPage from "../support/pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("should log in the user", () => {
    loginPage.emailEl.type("sean.maxwell@gmail.com");
    loginPage.passwordEl.type("Password@1");
    loginPage.submitButtonEl.click();

    // Assert that the user is logged in
    cy.get("#welcome-message").should("contain", "Welcome, Sean Maxwell!");
    cy.get("#logout-btn").should("be.visible");
  });

  it("should display an error message for invalid login", () => {
    loginPage.emailEl.type("invalid");
    loginPage.passwordEl.type("invalid");
    loginPage.submitButtonEl.click();

    // Assert that user is not logged in
    cy.get("#welcome-message").should("not.exist");
    cy.get("#logout-btn").should("not.exist");
  });
});
