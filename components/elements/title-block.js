import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class TitleBlock extends PolymerElement {
  
  static get properties() {
    return {
      title: {
        type: String
      },
      subtitle: {
        type: String,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
        div {
          background-color: #1de9b6;
          color: #424242;
          padding: 40px 40px 30px 25px;
          margin-bottom: 20px;
          height: 80px;
        }
        h1, h4 {
          margin: 0;
          margin-bottom: 10px;
        }
      </style>
      <div>
        <h1>{{title}}</h1>
        <h4>{{subtitle}}</h4>
      </div>
    `;
  }

  ready() {
    super.ready();
    if (this.shadowRoot.querySelector('h4').innerHTML === '') {
      this.shadowRoot.querySelector('h1').style.marginTop ="15px";
    }
  }
 
}

customElements.define('title-block', TitleBlock);