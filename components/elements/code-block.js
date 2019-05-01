import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@kuscamara/code-sample/code-sample.js';

class CodeBlock extends PolymerElement {
  
  static get properties() {
    return {
      code: {
        type: String
      },
      type: {
        type: String, 
        value: 'js'
      }
    };
  }

  static get template() {
    return html`
      <style>
        div {
          width: 100%;
          margin: 20px auto;
        }
      </style>
      <div>
        <code-sample type="[[type]]" render copy-clipboard-button>
          <template preserve-content>
            {{code}}
          </template>
        </code-sample>
      </div>
    `;
  }

  ready() {
    super.ready();
    this.code = this.shadowRoot.getRootNode().host.innerHTML;
    console.log(this.code);
  }
 
}

customElements.define('code-block', CodeBlock);