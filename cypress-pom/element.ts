import * as Cypress from "cypress";

class PomElement {
  constructor(public selector: string, public parent?: PomElement) {}

  get element(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector);
  }

  type(text: string) {
    this.element.type(text);
  }

  click() {
    this.element.click();
  }
}

const elementFn = (selector: string, parent?: PomElement): PomElement => {
  return new PomElement(selector, parent);
};

export { elementFn, PomElement };
