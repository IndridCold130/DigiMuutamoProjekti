// navbar logic
class topnavbar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        body {
          margin: 0;
          background-image: url('Design/Conspiracy.jpg');
          background-size: cover;
          display: flex;
          flex-direction: column;
       }
   </style>
        <div id="navbar", class="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li class="dropdown">
                <a href="#Game">Game</a>
                <div class="dropdown-content">
                    <a href="#">World</a>
                    <a href="#">Races</a>
                    <a href="#">Classes</a>
                </div>
            </li>
            <li><a href="blog.html">Developer Blog</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="https://discord.gg/aSRmykTp" target="_blank">Discord</a></li>
        </ul>
      </div>
      `;
    }
  }

customElements.define('topnavbar-component', topnavbar);
// navbar logic

  class sinfooter extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <style>
    .footerimgbutton {
        background: none;
        border: none;
        cursor: pointer; /* Change cursor to a pointer */
        opacity: 0.85;
        transition: transform 0.2s ease-in-out; /* Add transition for smooth animation */
    }

    .footerimgbutton:hover {
        transform: scale(1.2); /* Increase the scale on hover (make it 20% larger) */
        opacity: 1.0;
    }
</style>

        <button onclick="window.open('https://discord.gg/aSRmykTp', '_blank')" class="footerimgbutton">
            <img src="Design/Buttons/discord_icon_HL.png" alt="Button 1" width=38 height=38>
         </button>

        <button onclick="window.open('https://discord.gg/aSRmykTp', '_blank')" class="footerimgbutton">
         <img src="Design/Buttons/icon_YT.png" alt="Button 2" width=38 height=38>
      </button>

      <button onclick="window.open('https://discord.gg/aSRmykTp', '_blank')" class="footerimgbutton">
      <img src="Design/Buttons/icon_patreon.png" alt="Patreon" width=38 height=38>
   </button>

   <button onclick="window.open('https://discord.gg/aSRmykTp', '_blank')" class="footerimgbutton">
   <img src="Design/Buttons/icon_reddit.png" alt="Reddit" width=38 height=38>
</button>

        <div>
        <p>Business inquiries:</p>
    <p>fake-email@placeholder.com</p>
</div>
      `;
    }
  }

// Define the custom element
customElements.define('sinfooter-component', sinfooter);
// footer logic

function playSound() {
    var audio = new Audio('Design/Sound/SF_Hover00.mp3');
    audio.play();
}

// gallery button
function GalleryButtonClicked(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("gallery-display");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

class faq extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <title>W3.CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <body>
    <div class="w3-container">
    
    <h2>Accordions</h2>
    <p>An accordion is used to show (and hide) HTML content:</p>
      
    <button onclick="myFunction('Demo1')" class="w3-btn w3-block w3-black w3-left-align">Open Section 1</button>
    <div id="Demo1" class="w3-container w3-hide">
      <h4>Section 1</h4>
      <p>Some text..</p>
    </div>
    
    </div>
    <script>
    function myFunction(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else { 
        x.className = x.className.replace(" w3-show", "");
      }
    }
    </script>
    </body>
`;
    }
  }

// Define the custom element
customElements.define('faq-component', faq);
// FAQ logic


