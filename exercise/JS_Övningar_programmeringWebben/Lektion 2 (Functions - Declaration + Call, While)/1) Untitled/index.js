"use strict";

let body = document.querySelector( "body" );

// Read the function declaration below to understand what it does.
function createNewElement (element, classAdd, text) {

  let div = document.createElement( element );
  div.classList.add( classAdd );
  div.innerHTML = text;

  return div;

}

// Use f1 to create the grid-element (wrapper)
let wrapper = createNewElement("div", "gridder", "");

// Add it to body
body.append(wrapper);

// Use a for-loop and f1 to create 4 divs
// The divs should each show one number: 1, 2, 3 and 4.
// Don't forget to append the divs to wrapper!
for (let i = 0; i < 4; i++) {
  // What needs to be repeated 4 times?
  let div = createNewElement("div", "gridItem", i + 1)
  wrapper.append(div);

  div.addEventListener("click", function(){
    randomColor(body);
    div.innerHTML = randomNumber(100);
  })
  
}


/// Below some extra 
function randomNumber(max){
  return Math.floor(Math.random()*max);
}

function randomColor(div){
  let Color = `#`; 
  Color += Math.random().toString(16).slice(2,8);
  div.style.backgroundColor = Color;

  console.log(Color);
}






