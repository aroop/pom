import Section from "./Section";
import Element from "./Element";

class Page {
  sections: { [key: string]: Section } = {};
  elements: { [key: string]: Element } = {};

  // Define a section of the page
  section(name: string, selector: string) {
    this.sections[name] = new Section(selector);
  }

  // Define an element of the page
  element(name: string, selector: string) {
    this.elements[name] = new Element(selector);
  }
}

export default Page;
