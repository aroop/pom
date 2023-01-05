// import {Page} from "@cypress-pom";
import {Page} from "../../../cypress-pom";

class LoginPage extends Page {
  constructor() {
    super();

    this.section("form", "form");
    this.element("email", "#email-input");
    this.element("password", "#pwd-input");
    this.element("submitButton", "button[id=login-btn]");
  }

  visit() {
    cy.visit("/");
  }

  enterEmail(email: string) {
    this.elements.email.element.type(email);
  }

  enterPassword(password: string) {
    this.elements.password.element.type(password);
  }

  submit() {
    this.elements.submitButton.element.click();
  }
}

export default new LoginPage();
