import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './../elements/title-block.js';
import './../elements/code-block.js';

class AboutMe extends PolymerElement {
  
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
      paper-card {
          display: block;
          margin: 0 auto;
          max-width: 400px;
          background-color: #e6ee9c;
          color: black;
          font-size: 1.3em;
      }
      .subtext {
        font-size: 0.8em;
      }
      .card-actions {
        border-top: 1px solid #757575;
      }
    </style>
    <title-block subtitle="" title="About Me"></title-block>
    <div id="page-content">
    <h2>Bhaskar Goyal</h2>
    <paper-card heading='' elevation='3' image="https://i.ibb.co/QdHhd63/Bhaskar-Goyal.jpg">
        
        <!-- Main content -->
        <div class="card-content">
            <p>Hi, this is me Bhaskar Goyal. </p>
            <p class="subtext">You will find me watching rom-com movies, teaching someone or giving part-time therapy. You might even find me planning out grand surprises. Though, I am full time procrastinator.
            <br><br>
            Working as a Software Development Engineer at Expedia.
            </p>
            
        </div>
        <div class="card-actions">
        <p class="subtext">
          Too tired of finding icons. 
          Here you go. <br><a href="https://www.facebook.com/bhaskar.goyal1" target="_blank">FB</a>, <a href="https://www.linkedin.com/in/bhaskar-goyal/" target="_blank">Linkedin</a>, <a href="https://github.com/bhaskargoyal" target="_blank">Github</a>, <a href="https://twitter.com/iambhaskargoyal" target="_blank">Twitter</a>
        </p>
          
        </div>
      </paper-card>
      <h2>Past Work</h2>
      <p>College Fest site: <a href="https://engifest17.github.io/engifest" target="_blank">https://engifest17.github.io/engifest</a></p>
      <p>This website itself.</p>
    </div>
    `;
  }

}

customElements.define('about-me', AboutMe);