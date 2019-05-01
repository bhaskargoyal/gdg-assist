import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import './../elements/code-block.js';

class TroubleShooting extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      <style>
      div#page-content {
        width: 93%;
        margin: 0 auto;
        padding-bottom: 40px;
      }
      h2 {
        border-bottom: 1px solid red;
        padding-top: 20px;
      }
      h4 {
        border-bottom: 1px solid green;
      }
      img {
        margin: 10px auto;
        display: block;
        max-width: 370px;
      }
    </style>
    <title-block subtitle="" title="Trouble Shooting"></title-block>
    <div id="page-content">
      <h4>Error in todo-list.js (91:42)   ')' expected.</h4>
      <p>In line 91 todo-list.js, change '&amp;lt;' to '<' sign. Everything will work perfectly.</p>

      <h4>Something isn't right while I was building it</h4>
      <p>There are volunteers nearby, connect with them. Or connect with me, after the talk.</p>

      <h4>The page won't reload itself</h4>
      <p>There is a setting to change page reload style in stackblitz. Can be accessed by clicking on settings gear icon.</p>

      <h4>Not able to follow up with the me?</h4>
      <p>Well, you can ask me to go slow. But even I have a time restraint. Nevertheless, you connect with me, afterwards. Happy to help.</p>

      <h4>Icon wont appear</h4>
      <p>Please ensure you have @polymer/paper-item dependency installed and imported before the iron-icon are accessed.</p>

      <h4>Don't want to try right now?</h4>
      <p>You can just listen or analyze the code I have provided you under the resources section.</p>

      <h4>The element/component isn't appearing</h4>
      <p>Make sure to add the component in index.js and register it using cutomElements. Refer to the code I have provided.</p>

      <h4>When to use which braces?</h4>
      <p>[[ ]] are used in 1 way binding, {{ }} are used in 2 way binding.</p>

      <h4>Life Advice?</h4>
      <p>Oh dear! No problem. </p>
    </div>
    `;
  }

}

customElements.define('trouble-shooting', TroubleShooting);