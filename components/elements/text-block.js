import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class TextBlock extends PolymerElement {

  static get template() {
    return html`
      <style>
      <style>

      <div>
        [[text]]
      </div>
    `;
  }
}

customElements.define('text-block', TextBlock);