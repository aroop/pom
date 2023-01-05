// import {Page} from "@cypress-pom";
// TODO: Check why paths in tsconfig for "@cypress-pom" are not working

import {Page, element, PomElement} from "../../../cypress-pom";

class LoginPage extends Page {

  readonly testEl: PomElement = element("#email-input");
  readonly passwordEl: PomElement = element("#pwd-input");
  readonly submitButtonEl: PomElement = element("button[id=login-btn]");

  visit() {
    cy.visit("/");
  }

  enterEmail(email: string) {
    this.testEl.element.type(email);
  }

  enterPassword(password: string) {
    this.passwordEl.element.type(password);
  }

  submit() {
    this.submitButtonEl.element.click();
  }
}

export default new LoginPage();
