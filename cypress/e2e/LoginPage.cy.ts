import loginPage from "./pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("should log in the user", () => {
    loginPage.enterEmail("sean.maxwell@gmail.com");
    loginPage.enterPassword("Password@1");
    loginPage.submit();

    // Assert that the user is logged in
    cy.get("#welcome-message").should("contain", "Welcome, Sean Maxwell!");
    cy.get("#logout-btn").should("be.visible");
  });

  it("should display an error message for invalid login", () => {
    loginPage.enterEmail("invalid");
    loginPage.enterPassword("invalid");
    loginPage.submit();

    // Assert that user is not logged in
    cy.get("#welcome-message").should("not.exist");
    cy.get("#logout-btn").should("not.exist");
  });
});
