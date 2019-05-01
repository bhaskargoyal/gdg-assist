import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import '@kuscamara/code-sample/code-sample.js';

class DemoMedium extends PolymerElement {
  
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
      ol>li {
        font-size: 1.3em;
        color: #1a237e;
      }
    </style>
    <title-block subtitle="Demo: Medium" title="Multiple Components"></title-block>
    <div id="page-content">
      <h2>Follow Along</h2>
      <p>Let's get started with working with multiple components.</p>

      <p>Our aim is to display an image and when we click on that image, 2 things should happen: </p>
      <ul>
        <li>Change the transparency of the image</li>
        <li>A text should say, you pressed on the image.</li>
      </ul>

      <p>For more clarification, <a href="https://stackblitz.com/edit/gdg-polymer-demo" target="_blank">this</a> is what we need to do, or scroll to the bottom of the page for reference (of the final images).</p>

      <p>Whenever an element must change in accordance with other element. We think of making 2 components, one parent and other one child.<br>Here the text must change whenever an image is pressed or not. You see things are connected to one another. Means parent child relationship.</p>

      <p>In this example we will make a &lt;container-element&gt; and a &lt;special-image&gt; components. Inside the container-element we will place the text element which will show whether you pressed the image or not.</p>

      <p>The &lt;container-element&gt; component is a parent level component which will have a &lt;special-image&gt; component inside it, as a child. Both components have properties. What are those, refer to diagram below.</p>

      <img style="max-width: 600px;" src="https://i.ibb.co/yFqfwn9/demo-2-explaintion-better.png" alt="demo-2-explaintion-better" border="0">

      <p>Here we are using <b>2 way data binding</b>. Which means that if we change isPressed property (of container-element) then pressed property (of special-image) will also get updated and vica versa. Hence, properties get updated when the other bounded property is updated.</p>


      <ol start="1">
        <li>
          Make a container-element.js file
        </li>
      </ol>
      <p>Add this file to index.js</p>
      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
// Demo 2
import './container-element.js';

        </template>
      </code-sample>

      <ol start="2">
        <li>
          Make a special-image.js file.
        </li>
      </ol>

      <p>Simply declare a special-image.js file.</p> 
      <p>We will get back to it shortly.</p>

      <ol start="3">
        <li>
          Define a basic &lt;container-element&gt; component
        </li>
      </ol>
      <p>First define a simple boilerplate code for a simple 
    PolymerElement.</p>
    
      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './special-image.js'

class ContainerElement extends PolymerElement {
  

  static get template() {
    return html\`
      <style> 
        * {
          font-family: 'Open Sans';
          text-align: center;
        }
        span#text {
          display: block;
          font-size: 20px;
        }
        span {
          display: block;
          font-size: 30px;
          color: #1976d2;
          margin: 30px;
        }

      </style>
      <div>
        <span>Click Image</span>
        <!-- will add here an image -->
        <span id="text"></span>
      </div>
    \`;
  }
}

customElements.define('container-element', ContainerElement);
      </template>
      </code-sample>

      <p>Note that we have imported the special-image.js file at top.</p>

      <p>Now, add the newly created tag &lt;container-element&gt; to index.html file inside &lt;body&gt; tag</p>
      <code-sample type="html"  copy-clipboard-button>
        <template preserve-content>       
  <container-element></container-element>
        </template>
      </code-sample>

      <p> You are able to view something on the browser.</p>


      <ol start="4">
        <li>
          Define the &lt;special-image&gt; component
        </li>
      </ol>
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SpecialImage extends PolymerElement {

  static get properties() {
    return {
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  static get template() {
    return html\`
    <style>
      :host img {
        opacity: 1;
      }
      :host([pressed]) img {
        opacity: 0.5;
      }
      img {
        width: 80%;
      }
    </style>
    <img src="https://cdn.pixabay.com/photo/2017/11/06/20/09/abstract-2924732_960_720.jpg"></img>
    \`;
  }
}

customElements.define('special-image', SpecialImage);
      </template>
      </code-sample>
      <h4>Custom Styling</h4>
      <p>":host" is the root element, i.e the special-image component itself. </p>
      <p>When the component is unpressed, the opacity of image is set a 1. when pressed, then it is 0.5. <p>

      <h4>Defining Custom properties</h4>
      <p>We have defined a property pressed under a properties static function. the type of the pressed property is Boolean, its inital value is false. <p>
      <h4>Notify</h4>
      <p> The notify specifies whether the parent component which will import or use this special-image component will be able to notified if this property changes. If this true, means 2 way data binding is enabled. And there we need to use {{ }} braces inside container-element.js.</p>


      <ol start="5">
        <li>
          Add ready and imageClickHandler in special-image component
        </li>
      </ol>
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
ready() {
  super.ready();
  this.shadowRoot.querySelector('img').addEventListener('click', this.imageClickHandler.bind(this));
}

imageClickHandler() {
  this.pressed = !this.pressed;
}
        </template>
      </code-sample>
      <h4>Ready Function</h4>
      <p> When the element is loaded and rendered, "ready" function is executed.</p>
      <p> Here we have added and event handler "imageClickHandler" which toggles the pressed property.

      <h4>Full File: special-image.js</h4>
      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SpecialImage extends PolymerElement {

  static get properties() {
    return {
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  static get template() {
    return html\`
    <style>
      :host img {
        opacity: 1;
      }
      :host([pressed]) img {
        opacity: 0.5;
      }
      img {
        width: 80%;
      }
    </style>
    <img src="https://cdn.pixabay.com/photo/2017/11/06/20/09/abstract-2924732_960_720.jpg">
    \`;
  }

  ready() {
    super.ready();
    this.shadowRoot.querySelector('img').addEventListener('click', this.imageClickHandler.bind(this));
  }

  imageClickHandler() {
    this.pressed = !this.pressed;
  }
        
}

customElements.define('special-image', SpecialImage);
      
        </template>
      </code-sample>

      <h4>So what is the special-image element doing?</h4>
      <p>Fristly, when the image is clicked its opacity is changed</p>
      <p>Secondly, whenever pressed a property is changing which is notified to a parent.</p>

      <ol start="6">
        <li>
          Complete container-element.js
        </li>
      </ol>
      <p> Now our task is to import and use the &lt;special-image&gt; component. As we have already imported the special-image.js. We will use it.</p>
      <p> The pressed property is available as an attribute to special-image tag. Refer below.</p>

<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './special-image.js'

class ContainerElement extends PolymerElement {
  

  static get template() {
    static get properties() {
      return {
        isPressed: {
          type: Boolean
        }
      }
    }
    return html\`
      <style> 
        * {
          font-family: 'Open Sans';
          text-align: center;
        }
        span#text {
          display: block;
          font-size: 20px;
        }
        span {
          display: block;
          font-size: 30px;
          color: #1976d2;
          margin: 30px;
        }

      </style>
      <div>
        <span>Click Image</span>
        <special-image pressed={{isPressed}}></special-image>
        <span id="text">[[_handleNewText(isPressed)]]</span>
      </div>
      <hr>
    \`;
  }
  _handleNewText(pressed) {
    return pressed ? 'you pressed': 'not pressed';
  }
}

customElements.define('container-element', ContainerElement);

        </template>
      </code-sample>

      <h4>Data Binding</h4>
      <p>We accessed/captured the pressed property of special-image in "isPressed". Which gets updated whenever there is a change.</p>
      <p>Whenever there is an "observable change" in the isPressed. Attached code (_handleNewText) gets executed. Making the span text to change from 'not pressed' to 'you pressed'.
      <hr>
      <p>Result will be similar to <a href="https://stackblitz.com/edit/gdg-polymer-demo" target="_blank">this</a>.</p>
      <img src="https://i.ibb.co/n12VDnk/demo2-1.png" alt="demo2-1" border="0">
      <img src="https://i.ibb.co/9nftFsW/demo2-2.png" alt="demo2-2" border="0">

</div>
    `;
  }

}

customElements.define('demo-medium', DemoMedium);