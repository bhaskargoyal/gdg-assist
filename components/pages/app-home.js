import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import './../elements/code-block.js';

let data = require('./../../data/pages/home.json');

class AppHome extends PolymerElement {
  
  static get properties() {
    return {
      data: {
        type: Object,
        value: data
      }
    };
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
      <title-block subtitle="Learning Arena" title="[[data.title]]"></title-block>
      <div id="page-content">
        <h2>Aim</h2>
        <p>
        To understand what is polymer and how it is designed. While this learning continues, we will build a Todo App.
        </p>
        <p>
        But wait!
        </p>
        <p>
        How will be <i>reach</i> there? Let's first <b>break</b> down the problem.
        </p>
        <h2>Steps</h2>
        <p>In order to design progressive web apps in polymer, we first need to know how is polymer designed. Further we must know what is actually polymer? Okay, I know its somewhat a frontend technology. Hmm... but what is a frontend technology? How its structured? Going to the basic root. What is a client server architecture?</p>
        <img src="https://i.ibb.co/DV4p8GX/home3.png" alt="home3" border="0">
        
        <h2>1. Client Server Architecture</h2>
        <p>
        When a client (i.e. browser) requests at a URL (address of server) to get some data; Server sends a response back inform of documents that the client can understand.
        </p>
        <img src="https://i.ibb.co/R7GCJ0r/client.png" alt="client" border="0">

        <p>
        Server does some processing. The code on which server processes, is called backend. The code which is send back to client to process is frontend.
        </p>

        <h2>2. What is frontend?</h2>
      
        <p>
        Client understandable data consists of frontend technology. (received from server).
        </p>

        <p>
        Now this frontend technology is browser complaint. Means the technology must use, HTML, CSS or JavaScript across its capability.
        </p>
        
        <p>
        Hence, to make your own frontend technology, one must use these only.
        </p>

        <p>
          <ul>
            <li>HTML and CSS for Viewing part. (The View)</li>
            <li>JavaScript as in that controls the logic. (The Controller)</li>
            <li>Any storage for keeping variables. (or in browser storage) (The Model)</li>
          </ul>
        </p>

        <p>
        Good, that we know what a frontend technology must have, but we still don’t know how are these designed.
        </p>

        <h2>3. How should we architect a frontend technology?</h2>
        <p>
        Now architecture means that we must assemble these things (HTML, CSS, JS and/or storage) in a particular fashion. Hmm... but how?
        </p>

        <p>
        The most prevalent architecture in frontend technology is MVC architecture. which was introduced by Glenn Krasner and Stephen Pope.
        </p>


        <h4>MVC Architecture</h4>
        <p>
        Stands for <b>Model - View - Controller</b>
        </p>

        <p>
        All of the 3 are objects. And every object performs a different role.
        </p>

        <p>
          <ul>
            <li>Model - It is an application object. (business)</li>
            <li>View - Screen Presentation</li>
            <li>Controller - handles the way the user interface reacts to the user input</li>
          </ul>
        </p>

        <p>
        It is quite crucial to decouple mechanisms that perform different tasks. In MVC this decoupling is the essence of why this architecture is prevalent and widely used.
        </p>

        <p>
        Lets see how decoupling is done.
        </p>

        <p>
        View and Model are decoupled and they use a protocol to talk to, that is “publisher and subscriber”. Model publishes. (speakers). Controller/View subscribe. (listeners)
        </p>

        <img style="max-width: 600px" src="https://i.ibb.co/ZXCHfL8/mvc.png" alt="mvc" border="0">

        <p>
        3 key design patterns are utilized when MVC is desinged.
        <ul>
            <li><b>Observer Pattern:</b> <br>A views main aim is to ensure that its appearance reflects the state of the model. 
            Whenever a model data changes, it publishes an event and the listeners listen to this and perform an update. Decoupling objects so that changes to one can affect any number of others without requiring the changed object to know details of the others.<br></li>
            <br>
            <li><b>Composite Pattern:</b> <br>This is quite simple pattern. Pattern says that “an object A is comprised of same type of objects, which comprises of same type of objects internally”. Like a tree like fashion. Or a DOM tree in HTML is “composite” pattern. Did you ever think why it is made that way? It because it consists of tags which internally have tags.<br></li>
            <br>
            <li><b>Strategy Pattern:</b> <br>This is between controller and view. View have a controller attached to it (an algorithm). Means what should view do, when a user clicks on it. What kind of functionality view must perform.<br></li>
            <br>
          </ul>
        </p>

        <h4>Shortcoming of building MVC from scratch</h4>

        <p>
        These are not plug and play things.
        </p>
        <p>
        Many frameworks and libraries are implemented with the MVC architecture. But the major fault was that, they could not be reused. Plug and play functionality is not available, which makes a developer do those tedious boilerplate work again and again. Or these behave differently in different contexts.
        </p>

        <h2>4. Solution: Webcomponents</h2>

        <p>
        A new term used coined, “component”. That is nothing but model, view or controller assembled together into a black box. <i>These components (as the name suggests) are capable of being <b>plugged</b> into any other code and will work the same everywhere. Hence they are reliable and behave similarly in all the contexts.</i>
        </p>

        <p>
        A webcomponent can consist of “MVC” all of these or simply any combination of these.
        </p>

        <p>
        Okay now we know that web components are there and why are they needed. We must know how are they designed architecture-ly. What all design patterns are applied while making them. Here comes the polymer.
        </p>
        
        <h2>5. Polymer</h2>
        <p>
        The Polymer library is the original web components library. The Polymer library brings web components into the mainstream, embracing JavaScript modules and npm.
        </p>

        <p>
        We can update apps and elements for seamless interop with popular frameworks and tools and easy access to the full JavaScript ecosystem.
        </p>

        <h4>What does polymer do?</h4>
        <p><b>We create our own custom tag elements. Like &lt;input&gt; or &lt;p&gt; tags. Not just this, we can import other people's tags as well and use them, without having to rebuild everything from scratch. Hence, the core essence is plug and play.</b></p>
        
        <p>Hence we make small small functionality in polymer, and then publish them as components. Or make fully featured websites like this.</p>

        <h2>6. How is polymer designed?</h2>

        <p>
        Polymer consists web components packaged together in composite design patterns.
        </p>

        <p>
        Okay, got it. But how do I built a component? For this we need to understand component in depth. First things first.
        </p>

        <p>
          <ol type="1">
            <li>Every component consists of some properties and attributes. These properties can be set from inside or outside.</li>
            <li>Every component can have multiple components within itself. (Again composite pattern).</li>
            <li>Every component can send down values to it children, which can further send them it to their children.</li>
            <li>Any child component of other component can send some values to its parent by using observer pattern (events). That is, child will publish an event (speak out some event). And then the parent is going to listen to that event and which if parents wishs can communicate to other children.</li>
          </ol>
        </p>

        <img style="max-width: 500px" src="https://i.ibb.co/7jWkMc9/mediator.png" alt="mediator" border="0">

        <p>
        This is called the mediator pattern. 
        </p>

        <p>
        Let’s say &lt;my-component&gt; is used to type "[name]" in the &lt;input&gt; and show “hello, [name]” in the &lt;h3&gt; after that.
        </p>

        <p>
        How things work? This is as follows. 
        </p>

        <p>
        Intially, When my-component is made.
        </p>

        <p>
          <ol>
            <li>It sends down the default properties to the input and h3. Now the input is changed by the user and he type his name inside it.</li>
            <li>The input component fires an event up to the my-component with the data inside the input box.</li>
            <li>my-component sends down this data to h3 which finally shows the actual hello, <name></li>
          </ol>
        </p>

        <p>
        When we say that properties go down, we mean that the properties of input are set using properties of &lt;my-component&gt;. This is one way data binding. (top down)
        </p>

        <p>
        <ul>
          <li><b>1 way data binding:</b> <br>When properties of my-component are used to set properties of input. (from parent to child). Here we use [[ ]] braces.</li>
          <li><b>2 way data binding:</b> <br> When properties of either webcomponent is used to set properties of other web component. (bidirectional). Here we use {{ }} braces.</li>
        </ul>
        </p>

        <p>
        So, what is the take away?
        </p>

        <p>
          <ol>
            <li>To send data to child, use child properties/attributes.</li>
            <li>To receive data at a parent level. Either use events or use 2 way data-binding.</li>
          </ol>
        </p>

        

      <h4>Shadow DOM</h4>
      <p>Document Object Model is a tree. Tree have leaves and nodes. If a styling is applied on a higher level node, it is applied on all the children nodes.</p>
      <p>Thus, if we are defining a component in a polymer, what will happen is that our parent level styling will be applied to imported or custom defined elements. Which we would not want inside plug and play components. Hence to solve this problem, shadom DOM is used.</p>
      <p>A shadow element is considered detached from the main tree. Thus, it must have its own styling and won't be affected by parent's styling. </p>
      <img src="https://i.ibb.co/v4dhfC9/shadow.png" alt="shadow" border="0">
      <p>Every Element in Polymer is rendered as a Shadow Element</p>

      <h4>We are ready</h4>
      <p>
          Finally, we are ready to learn how to write apps and elements (components) in polymer. Go to Resources.
        </p>
      </div>
    `;
  }
 
}

customElements.define('app-home', AppHome);