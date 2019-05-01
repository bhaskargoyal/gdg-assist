import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import './../elements/code-block.js';
import '@kuscamara/code-sample/code-sample.js';

class DemoSimple extends PolymerElement {
  
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
      li {
        font-size: 1.3em;
        color: #1a237e;
      }
    </style>
    <title-block subtitle="Demo: Simple" title="Cliché, Hello World!"></title-block>
    <div id="page-content">
      <h2>Easy Peasy</h2>
      <p> Hello World is quite simple, yet it will tell you, how things are written in polymer. Will even get you familiar with basic syntax too.
      <ol start="1">
        <li>
          Open index.html and index.js
        </li>
      </ol>
      <p>Analyze what is written.</p>
      <p>Okay, we all know that index.html is the main file that the browser uses to render the page. Do you see a &lt;dom-element&gt; tag? This is what we are trying to build. Our own custom tags.</p>
      <p>Okay, got it, but where is the element defined? It is dom-element.js!</p>
      <p>Open the index.js, you will see that it imports the dom-element.js. Actually index.js is what server starts executing at load time. It clubes index.html and imported things into one. And sends them back to the browser.</p>
      <p>index.js is the starting point for polymer to start executing.</p>

      <ol start="2">
        <li>
          Import polymer dependencies.
        </li>
      </ol>
      <p>Inside package.json file you can specify your dependencies.</p>
      <p>This is what I have already done. You're welcome!</p>


      <ol start="3">
        <li>
          Make a new file with name "simple-dom-element.js"
        </li>
      </ol>
      <p>Before you can write your own custom element, ensure to <b>import</b> this file in index.js</p>
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
// Demo 1
import './simple-dom-element.js';
        </template>
        </code-sample>


      <p>Refer the dom-element.js file and write your first PolymerElement</p>


      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
          import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SimpleDomElement extends PolymerElement {
  
  // A getter which is called to render the template
  static get template() {
    // return a HTML template literal.
              return html\`
                <h2>Cliché, Hello World!</h2>
                <div>I'm a simple DOM element</div>
              \`;
            }
}
customElements.define('simple-dom-element', SimpleDomElement);


        </template>
      </code-sample>
      <p>Note: 'simple-dom-element' is defined at the end by using customElements. This is where your element is actually registered.</p>

      <p>Now, add the newly created tag &lt;simple-dom-element&gt; to index.html file inside &lt;body&gt; tag</p>
      <code-sample type="html"  copy-clipboard-button>
        <template preserve-content>       
  <simple-dom-element></simple-dom-element>
        </template>
      </code-sample>

      <p>Add the styling within the template literal</p>
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
return html\`
  <style>
    * {
      font-family: 'Open Sans';
    }
    h2 {
      color: #1976d2;
      margin: 30px;
      font-size: 60px;
    }
    div {
      margin: 30px;
      font-size: 20px;
    }
  </style>
  <h2>Cliché, Hello World!</h2>
  <div>I'm a simple DOM element</div>
\`;
        </template>
      </code-sample>
      <p>The full file of simple-dom-element.js is as follows</p>
      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SimpleDomElement extends PolymerElement {
  
  // A getter which is called to render the template
  static get template() {
    // return a HTML template literal.
    return html\`
      <style>
        * {
          font-family: 'Open Sans';
        }
        h2 {
          color: #1976d2;
          margin: 30px;
          font-size: 60px;
        }
        div {
          margin: 30px;
          font-size: 20px;
        }
      </style>
      <h2>Cliché, Hello World!</h2>
      <div>I'm a simple DOM element</div>
    \`;
  }
}

customElements.define('simple-dom-element', SimpleDomElement);


         </template>
      </code-sample>

      


      <p>You must be able to view hello world on the developer browser.</p>
      <p>Similar to <a href="https://stackblitz.com/edit/gdg-polymer-demo" target="_blank">this</a>.</p>

      <img style="max-width: 380px" src="https://i.ibb.co/wgN4xkk/hello-world.png" alt="hello-world" border="0">
    </div>
    `;
  }

}

customElements.define('demo-simple', DemoSimple);