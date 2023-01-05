// import {PomElement} from "@cypress-pom/element";
import {PomElement} from "./element";

class PomSection extends PomElement {
}

const sectionFn = (name: string, selector: string): PomSection => {
  return new PomSection(selector);
}

export {sectionFn, PomSection};
