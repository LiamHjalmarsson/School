"use strict";

// 1) Declare and initialize (if possible) global variables
let hotPinkbutton = document.getElementById("hotpink");
let chartreuseButton = document.getElementById("chartreuse");
let body = document.body;


// 2) Assign the event listeners for the existing HTML-elements
hotPinkbutton.addEventListener("click", function () {
    background("hotPink");
    acctive(hotPinkbutton);
})

chartreuseButton.addEventListener("click", function () {
    background("chartreuse");
    acctive(chartreuseButton);
})


// 3) Direct code
hotPinkbutton.click()


// 4) Function declarations

// You MUST declare two functions:
// - one that changes the colors (background and text)
// - one that "marks" the chosen color (see the video) 
function background (color) {
    body.style.backgroundColor = color
}

function acctive (selected) {
    hotPinkbutton.classList.remove("selected");
    chartreuseButton.classList.remove("selected");

    selected.classList.add("selected")
}

// Exta buttons 

// let ButtonTextSize = CreateElement("div", "TextChange");
// let choices = document.querySelector("#choices");
// choices.appendChild(ButtonTextSize);

// ButtonTextSize.addEventListener("click", function(){
//     TextSize("20px", "20px", "black");
//     AcctiveInnactive(ButtonTextSize);
// })

// function CreateElement (element, Text){
//     let div = document.createElement(element);
//     div.innerHTML = Text;

//     return div
// }

// function TextSize(FontSize, NewMargin, TextColor){
//     body.style.fontSize = FontSize;
//     body.style.margin = NewMargin;
//     body.style.color = TextColor;
// }

// let DivBox = CreateElement("div", "");
// body.appendChild(DivBox);

// DivBox.style.height = "500px";
// DivBox.style.width = "500px";
// DivBox.style.margin = "auto";
// DivBox.style.border = "5px solid black";
// DivBox.style.display = "grid";
// DivBox.style.gridTemplateColumns = "repeat(5, 1fr)";
// DivBox.style.gridTemplateRows = "repeat(5, 1fr)";


// function ColorBox (color){
//     DivBox.style.backgroundColor = color;
// }

// hotpiknkButton.addEventListener("click", function(){
//     ColorBox("orange")
// })

// chartreuseButton.addEventListener("click", function(){
//     for(let i = 0; i < 10; i++){
//         let div = CreateElement("div", i + 1);
//         div.style.display = "flex";
//         div.style.justifyContent = "center";
//         div.style.alignItems = "center";
//         DivBox.appendChild(div);
//     }

// })


