class Element {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get element() {
    return cy.get(this.selector);
  }
}

export default Element;
