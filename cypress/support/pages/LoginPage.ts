// import {Page} from "@cypress-pom";
// TODO: Check why paths in tsconfig for "@cypress-pom" are not working

import {
  Page,
  element,
  PomElement,
  section,
  PomSection,
} from "../../../cypress-pom";

class LoginPage extends Page {
  public readonly loginFormSection: PomSection = section("#login-block");

  public readonly emailEl: PomElement = element(
    "#email-input",
    this.loginFormSection
  );
  public readonly passwordEl: PomElement = element(
    "#pwd-input",
    this.loginFormSection
  );
  public readonly submitButtonEl: PomElement = element(
    "button[id=login-btn]",
    this.loginFormSection
  );

  visit() {
    cy.visit("/");
  }
}

export default new LoginPage();
