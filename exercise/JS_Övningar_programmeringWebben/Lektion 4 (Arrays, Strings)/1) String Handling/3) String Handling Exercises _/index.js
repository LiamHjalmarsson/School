"use strict";

// The code below uses a for-loop and concatenation to set the 
// content of the divs (see the HTML-file) to:
// #id1 should contain: This div has the id "element1"
// #id2 should contain: This div has the id "element2"
// etc
// But the code has bugs. Fix it.

// for ( let i = 1; i < 4; i++ ) {
//   let element = document.querySelector( "#element" + i);
//   let content = 'This div has the id "element' + i + '"';
//   element.innerHTML = content;
// }


// Do the same but using template literals (backticks)
// for ( let i = 1; i < 4; i++ ) {
//   let div = document.querySelector(`#element${i}`);
//   let content = `This div has the id "element ${i}"`
//   div.innerHTML = content
// }


// Continue using template literals but solve it with only one line inside the loop
// for ( let i = 1; i < 4; i++ ) {
//   document.querySelector(`#element${i}`).innerHTML = `This di has the id "element ${i}"`
// }


// Do the same but with a while-loop (careful with infinite loops)
let counter = 0; 
while (counter < 4) {
  counter++
  document.querySelector(`#element${counter}`).innerHTML = `This div had the id "element ${counter}`";
}