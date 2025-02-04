"use strict";

// Skapa 100 divvar och placera dem i gridden (wrapper, se CSS).
// Varje grid ska ha en siffra, från 0 till 99.
// Du måste använda en loop för detta, du får under inga
// omständigheter skapa 100 divvar per hand.

for ( let i = 0; i < 100; i++ ) {
    let div = document.createElement("div")
    div.innerHTML = i
    document.querySelector("#wrapper").append(div)

    
    div.addEventListener("click", function(){
        randomColor(div);
        div.innerHTML = i++ + 1;
    })
} 

// Random color 
function randomColor(div){
    let Color = `#`; 
    Color += Math.random().toString(16).slice(2,8);
    div.style.backgroundColor = Color;
  }