//let onOff = true;
const messageOne = ["Welcome", "Welcome to beauty", "We take pride on what we do","Book an appointment"];
const classColor = ["text-dark", "text-primary", "text-pink"];
let chooseColor = 0;
let startMessage = 0;
let speed = 150;
let speedTwo = 30;
let firstMessage = 0;
let wipeMessage = 0;

$(document).ready(function() {

    /*
    class VCard extends HTMLElement {
        constructor() {
          super();
      
          this.heading = "";
          this.subheading = "";
        }
      
        connectedCallback() {
          this.heading = this.getAttribute("heading");
          this.subheading = this.getAttribute("subheading");
      
          this.render();
        }
      
        render() {
          this.innerHTML = `
            <div style="text-align: center; font-family: sans-serif">
              <h1>${this.heading}</h1>
              <p>${this.subheading}</p>
            </div>
            `;
        }
    } 
    customElements.define("v-card", VCard); */
      
    function typeWriter() {
        
        if (firstMessage < messageOne[startMessage].length ) {
            document.getElementById("message").innerHTML += messageOne[startMessage].charAt(firstMessage);
            firstMessage++; 
            wipeMessage++;
            setTimeout(typeWriter, speed);
        }
        else {
            untypeWrite();
        }
    }

    function untypeWrite() {
        if(firstMessage === messageOne[startMessage].length && wipeMessage > 0) {
            wipeMessage--;
            document.getElementById("message").innerHTML = messageOne[startMessage].substring(0, wipeMessage);
            setTimeout(untypeWrite, speedTwo); 
        }
        else {
           
            wipeMessage = 0;
            firstMessage = 0;
            startMessage++;
            document.getElementById("message").classList.remove(classColor[chooseColor]);
            chooseColor++;
    
            document.getElementById("message").classList.add(classColor[chooseColor]);
            if(startMessage === messageOne.length) {
                startMessage = 0;
                firstMessage = 0;
                chooseColor = 0;
            }
            typeWriter();
        }
        
    }

    typeWriter();
    
});
