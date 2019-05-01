import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './../elements/title-block.js';
import './../elements/code-block.js';

class AppResources extends PolymerElement {
  
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
    <title-block subtitle="" title="Resources"></title-block>
    <div id="page-content">
      

      <h2>Where will you code?</h2>
        <p>Follow these steps one by one</p>
        <ol>
          <li> Make an account on <a href="https://stackblitz.com" target="_blank">https://stackblitz.com</a> (simply sign in with google).</li>
          <li>Here's your workspace <a href ="https://stackblitz.com/edit/polymer-empty-starter" target="_blank">Scratchpad</a>, where you will code. This an online code editor, themed like Visual Studio Code.</li>
          <li>Open the Scratchpad above linked.</li>
          <li><b>Fork</b> it, using the top menu button. Otherwise it won't get saved. :( </li>
          <li>Whenever you make some changes, save it using Ctrl/Cmd + S. And refresh the inbuilt developer browser.</li>
      </ol>

      <h2>Talk</h2>
      <p>Includes ppt, demos</p>
      <p>
        <ul>
          <li><b>PPT</b> <br>Quite <a href="https://drive.google.com/open?id=1EoA-tLWEZeCCiwVbh0tyZnGKLNlkYGYbVqgIvezrObc" target="_blank">useless</a>, but still, if you want to.</li>
          <br>
          <li><b>Demo</b> <br><a href ="https://stackblitz.com/edit/gdg-polymer-demo" target="_blank">This</a> is full demo that we will build.</li>
          <br>
          <li><b>This Website</b> <br>This is fully featured <a href ="https://stackblitz.com/edit/gdg-assist" target="_blank">website</a> made with polymer for your future reference in stackblitz. Do check it out.</li>
        </ul>
      </p>

      <h2>After Talk</h2>
      <p>You can reach me through the links under <i>About Me</i> section.</p>
      <p>I know no body likes survey and feedback, even I hated it when I was in your seat. Still, can you please fill a form for me. It will help me with things on which I can improve on. I might also get to know what you appreciated.
      <p>Though, I still distaste it. Huh, what a hypocrite am I?!</p>
    </div>
    `;
  }

}

customElements.define('app-resources', AppResources);