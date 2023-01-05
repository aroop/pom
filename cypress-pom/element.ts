import * as Cypress from "cypress";

class PomElement {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get element(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector);
  }
}

const elementFn = (selector: string): PomElement => {
  return new PomElement(selector);
};

export {elementFn, PomElement};
