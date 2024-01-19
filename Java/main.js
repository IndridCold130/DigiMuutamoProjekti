// navbar logic
class topnavbar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div id="navbar", class="navbar">
        <ul>
            <li><a href="index.html" onmouseover="playSound()">Home</a></li>
            <li class="dropdown">
                <a href="#Game" onmouseover="playSound()">Game</a>
                <div class="dropdown-content">
                    <a href="#">World</a>
                    <a href="#">Races</a>
                    <a href="#">Classes</a>
                </div>
            </li>
            <li><a href="#Developer Blog" onmouseover="playSound()">Developer Blog</a></li>
            <li><a href="gallery.html" onmouseover="playSound()">Gallery</a></li>
            <li><a href="#Discord" onmouseover="playSound()">Discord</a></li></ul>
      </div>
      `;
    }
  }

customElements.define('topnavbar-component', topnavbar);
// navbar logic

// footer logic
class pagefooter extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() 
    {`
    // HTML code goes here!
    `;
    }
}
customElements.define('pagefooter-component', pagefooter);
// footer logic

function playSound() {
    var audio = new Audio('Design/Sound/SF_Hover00.mp3');
    audio.play();
}