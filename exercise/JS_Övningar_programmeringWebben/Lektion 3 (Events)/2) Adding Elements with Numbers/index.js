"use strict";


// 1) Declare and initialize (if possible) global variables
let hotPinkButton = document.getElementById("hotpink");
let chartreuseButton = document.getElementById("chartreuse");
let container = document.getElementById("container");
let counter = 0;

// 2) Assign the event listeners for the existing HTML-elements
hotPinkButton.addEventListener("click", function () {
    box("hotPink");
})

chartreuseButton.addEventListener("click", function () {
    box("chartreuse");
})

// 3) Direct code


// 4) Function declarations
function box (color) {
    let div = document.createElement("div");
    div.style.backgroundColor = color;

    div.innerHTML = counter
    counter++

    container.append(div)
}


// Same 
// 1) Declare and initialize (if possible) global variables
// let Body = document.querySelector("body");
// let Wrapper = CreateAndColor("div", "adders", "", "");
// let HotpinkButton = CreateAndColor("button", "divButton", "HotPink", "steelBlue");
// let ChartreuseButton = CreateAndColor("button", "divButton", "Chartreuse", "orange");
// let container = CreateAndColor("div", "container", "", "");

// // Append 
// Body.appendChild(Wrapper);
// Wrapper.appendChild(HotpinkButton);
// Wrapper.appendChild(ChartreuseButton);
// Body.appendChild(container);

// // 2) Assign the event listeners for the existing HTML-elements
// HotpinkButton.addEventListener("click", function(){
//     CreatecolorDiv();
//   })
  
// ChartreuseButton.addEventListener("click", function(){
//     CreatecolorDiv();
//   })

// // 3) Direct code


// // 4) Function declarations
// function CreateAndColor(element, Class, Text, BgColor){
//     let div = document.createElement(element);
//     div.classList.add(Class);
//     div.innerHTML = Text; 
//     div.style.backgroundColor = BgColor;
    
//     return div;
// }

// function CreatecolorDiv(){
//     let div = document.createElement("div");
//     div.style.backgroundColor = random(div);
//     container.appendChild(div);
// }

// function random(div){
//     let Color = `#`;
//     Color += Math.random().toString(16).slice(2,8);
//     div.style.backgroundColor = Color;
// }

// let Box = document.createElement("div");
// Box.style.height = "100px";
// Box.style.width = "300px";
// Box.style.backgroundColor = "orange";
// Box.style.margin = "100px auto"
// Box.innerHTML = `#`;

// Body.appendChild(Box);