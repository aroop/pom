// import {PomElement} from "@cypress-pom/element";
import {PomElement} from "./element";

class PomSection extends PomElement {
}

const sectionFn = (selector: string, parent?: PomElement): PomSection => {
  return new PomSection(selector, parent);
}

export {sectionFn, PomSection};
