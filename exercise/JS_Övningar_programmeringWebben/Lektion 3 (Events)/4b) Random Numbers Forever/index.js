"use strict";


// 1) Declare and initialize (if possible) global variables



// 2) Assign the event listeners for the existing HTML-elements



// 3) Direct code
for ( let i = 0; i < 25; i++) {
  let div = document.createElement("div");
  div.innerHTML = randomNumber(100);

  div.addEventListener("click", function (){
    div.innerHTML = randomNumber(100)
  })

  document.querySelector("#container").append(div)
}


// 4) Function declarations

// The function below will, each time it is called,
// return one random number, between 0 and max (0 inclusive, max exclusive)
// Use it to solve this problem. You do not need to understand how it works.
function randomNumber ( max ) {
  return Math.floor( max * Math.random() );
}
