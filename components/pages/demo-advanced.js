import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import '@kuscamara/code-sample/code-sample.js';

class DemoAdvanced extends PolymerElement {
  
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
    <title-block subtitle="Demo: Advanced" title="Todo List"></title-block>
    <div id="page-content">
      <h2>Let's do some actual work</h2>
      <p>Okay, before coding anything, let's first design what we want to make.</p>
      <p>This is a sketch that might be the end result.</p>
      <img src="https://i.ibb.co/r4znWf5/todo-sketch.png" alt="todo-sketch" border="0">
      <p>Our task is now to design the components. But wait what components? How do we know we need to make these components? </p>
      <h4>Breaking into components</h4>
      <p>What do you observe, here? We immediately recognize that there is a whole container, which holds the title, todo-items, input and add button.</p>
      <p>Todo-items are repeated. So we must make a separate component for that.</p>
      <img src="https://i.ibb.co/CsXWT9v/todo-sketch-components.png" alt="todo-sketch-components" border="0">
      <p>Now we know, that we need to make 2 components, todo-list being the parent element, and multiple "todo-items" within that. 
      <ul>
        <li>todo-list</li>
        <li>todo-item</li>
      </ul>

      <p>Cool, that is done and dusted. </p>
      <p>What's next? Hmm... now we need to define how the properties and events will interact with each other. How will data flow? All these questions must be answered next. </p>
      <h4>Defining Properties and Events</h4>

      <img style="max-width: 600px;" src="https://i.ibb.co/Vty0Ldd/todo-diagram.png" alt="todo-diagram" border="0">

      <p>todo-item property</p>
      <ul>
        <li>
          <b>uid</b>
          </br>
          Unique identifier assigned to each todo-item by todo-list
        </li>
        <li>
          <b>value</b>
          </br>
          Actual value of the todo send from todo-list.
        </li>
        <li>
          <b>checked</b>
          </br>
          If the todo-item is checked or not. Boolean in nature.
        </li>
      </ul>


      <p>todo-list property</p>
      <ul>
        <li>
          <b>items</b>
          </br>
          Array of Objects</br>
          [ {value: "Bananas", uid: 1, checked: false},<br>{value: "Milk", uid: 2, checked: false} ]
        </li>
      </ul>

      <p><b>Delete Event</b> is fired by a each todo-item (containing its uid) which is captured by todo-list (parent) component. The parent component then deletes the uid data from the array. And rerenders the list.</p>

      <p><b>Add Event</b> or click event on add button, will trigger a function in todo-list component, which will add a object in the "items" property, and hence will rerender the whole todo-list.</p>

      <p>Now that we have defined all the requirements. Let's start by actually writing code for this. Awesome!</p>

      <ol start="1">
        <li>
        Make files named todo-list.js and todo-item.js
        </li>
      </ol>
      <p>Code below is for todo-list.js</p>

      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import './todo-item.js'

let UID = 3;

class TodoList extends PolymerElement {

  static get properties() {
    return {
      items: {
        type: Array,
        value: [{value: "Bananas", uid: 1, checked: false}, {value: "Milk", uid: 2, checked: false}]
      }
    }
  }
  
  static get template() {
    return html\`
      <style>
        paper-card {
          /* responsive */
          width: 40%;
          min-width: 300px;

          /* centering */
          left: 50%;
          transform: translateX(-50%);
          
          /* styling */
          --paper-card-background-color: #e1f5fe;
          --paper-card-header-color: #212121;
          --paper-card-header: {
            text-align: center;
          };
          margin-top: 80px;
          margin-bottom: 100px;
        }
        paper-button.indigo {
          background-color: #536dfe; 
          color: white;
        }
        
      </style>
      <paper-card heading='Todo List' elevation='3'>
        
        <!-- Main content -->
        <div class="card-content">

          
        </div>

        <!-- Action and Input -->
        <div class="card-actions">
          <paper-input label="Todo Item" id="item-input" on-keypress="inputKeyPress"></paper-input>
          </br>
          <paper-button raised class="indigo" on-click="addItem">Add</paper-button>
        </div>
        
        </br>
        </br>
      </paper-card>

      
    \`;
  }

  addItem() {
    let itemValue = this.shadowRoot.querySelector("#item-input").value;
    this.shadowRoot.querySelector("#item-input").value = '';
    UID = UID + 1;
    if (itemValue != '') {
      let item = {
        value: itemValue,
        uid: UID
      }
      this.push('items', item);
    }
  }

  inputKeyPress(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
  }
}

customElements.define('todo-list', TodoList);
        </template>
      </code-sample>
      
      <p>Here we defined the basic styling that is required, used paper-button and paper-card webcomponents. It is as easy as importing them and directly using them in the code itself. </p>
      <p>Declared the items properties with some inital value.</p>
      <p>Also, added an "addItem" handler to the the paper-button. Which simply makes a new item object with an incremented UID and the captured value from the input box. Then pushes that object to this.items property.</p>

        
      <p>Add this file to index.js</p>
      <code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
// Demo 3
import './todo-list.js';

          </template>
      </code-sample>


<p>Now, add the newly created tag &lt;todo-list&gt; to index.html file inside &lt;body&gt; tag</p>
      <code-sample type="html"  copy-clipboard-button>
        <template preserve-content>       
  <todo-list></todo-list>
        </template>
      </code-sample>



      <ol start="2">
        <li>
        Make a file named todo-item.js
        </li>
      </ol>
      <p>We declare a new PolymerElement from scratch for todo-item.</p>
      
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


class TodoItem extends PolymerElement {
  static get properties() {
    return {
      value: {
        type: String,
        value: '',
        notify: true,
        reflectToAttribute: true
      },
      uid: {
        type: Number,
        reflectToAttribute: true
      },
      checked: {
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
        iron-icon {
          margin-left: auto;
          --iron-icon-fill-color: #424242;
        }

        paper-item {
          --paper-item-focused-before: {
            opacity: 0;
          }
        }
        
      </style>
      <paper-item>
        <paper-checkbox checked="{{checked}}">
        </paper-checkbox>
        <span>[[value]]</span>
        <iron-icon icon="delete" on-click="deleteHandler"></iron-icon>
      </paper-item>
    \`;
  }

  deleteHandler() {
    this.dispatchEvent(new CustomEvent('delete-todo',{
      detail: {
        type: "delete",
        uid: this.uid
      }
    }));
  }
}

customElements.define('todo-item', TodoItem);
        </template>
      </code-sample>

      <p>Defined todo-item using the properties discussed above. For checked property it is essential to have notify as true.</p>
      <p><b>deleteHandler</b> is declared which publishs an event 'delete-todo' with its uid inside it. Which will be captured by the parent component and will use it to delete it. </p>

    <p>Final task is to complete the todo-list.js. To handle deletion gracefully.</p>

      <ol start="3">
        <li>
        Complete todo-list.js
        </li>
      </ol>
      <p>Now we must capture the event 'delete-todo' and delete that particular uid from the items property.</p>

      
<code-sample type="js"  copy-clipboard-button>
        <template preserve-content>

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import './todo-item.js'

let UID = 3;

class TodoList extends PolymerElement {

  static get properties() {
    return {
      items: {
        type: Array,
        value: [{value: "Bananas", uid: 1, checked: false}, {value: "Milk", uid: 2, checked: false}]
      }
    }
  }
  
  static get template() {
    return html\`
      <style>
        paper-card {
          /* responsive */
          width: 40%;
          min-width: 300px;

          /* centering */
          left: 50%;
          transform: translateX(-50%);
          
          /* styling */
          --paper-card-background-color: #e1f5fe;
          --paper-card-header-color: #212121;
          --paper-card-header: {
            text-align: center;
          };
          margin-top: 80px;
          margin-bottom: 100px;
        }
        paper-button.indigo {
          background-color: #536dfe; 
          color: white;
        }
        
      </style>
      <paper-card heading='Todo List' elevation='3'>
        
        <!-- Main content -->
        <div class="card-content">

          <!-- Repeat the Items in the array using dom-repeat -->
          <dom-repeat items="[[items]]">
            <template>
              <todo-item on-delete-todo="deleteTodoHandler" value="[[item.value]]" uid="[[item.uid]]" checked="{{item.checked}}"></todo-item>
            </template>
          </dom-repeat>
        </div>

        <!-- Action and Input -->
        <div class="card-actions">
          <paper-input label="Todo Item" id="item-input" on-keypress="inputKeyPress"></paper-input>
          </br>
          <paper-button raised class="indigo" on-click="addItem">Add</paper-button>
        </div>
        
        </br>
        </br>
      </paper-card>

      <hr>
    \`;
  }

  addItem() {
    let itemValue = this.shadowRoot.querySelector("#item-input").value;
    this.shadowRoot.querySelector("#item-input").value = '';
    UID = UID + 1;
    if (itemValue != '') {
      let item = {
        value: itemValue,
        uid: UID
      }
      this.push('items', item);
    }
  }

  deleteTodoHandler(event) {
    this.splice('items', this.getIndex(event.detail.uid), 1);
  }

  inputKeyPress(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
  }

  getIndex(uid) {
    for(let i=0; i < this.items.length; i++) {
      if (this.items[i].uid === uid) {
        return i;
      }
    }
  }
}

customElements.define('todo-list', TodoList);

  </template>
</code-sample>
<p>If you coiped it and there is this error</p>

      <p>We used DOM templating, i.e. &lt;dom-repeat&gt; for repeating the todo-items on this.items array.</p>
      <p>Also, added a on-delete-todo event handler. For deleting the todo-item, where we simply splice the array.</p>
      <p>This makes our code complete. Phew, finally finished.<p>
      <p>Result will be similar to <a href="https://stackblitz.com/edit/gdg-polymer-demo" target="_blank">this</a>.</p>

</div>
    `;
  }

}

customElements.define('demo-advanced', DemoAdvanced);