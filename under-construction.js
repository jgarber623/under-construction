export default class UnderConstruction extends HTMLElement {
  static tagName = "under-construction";

  static css = `\
    :host {
      background: repeating-linear-gradient(-45deg, #000, #000 1rem, #ffe100 1rem, #ffe100 2rem);
      display: block;
      height: 1rem;
    }
  `;

  static register(tagName = this.tagName, registry = globalThis.customElements) {
    registry?.define(tagName, this);
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const stylesheet = new CSSStyleSheet();

    stylesheet.replaceSync(this.constructor.css);

    shadow.adoptedStyleSheets = [stylesheet];
  }
}

UnderConstruction.register();
