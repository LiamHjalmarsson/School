"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link: https://github.com/LiamHjalmarsson



// GLOBAL VARIABLES
// None allowed




// FUNCTION DECLARATIONS (in alphabetical order)

function adder (Arr){

  let Sum = 0; 

  for (let i = 0; i < Arr.length; i++){

   Sum = Sum + Arr[i];

  }
  
  console.log(Arr)
  return Sum;

}


function averg(_array) {

  let average = adder(_array) / _array.length;
  average = roundString(average, 1);
  return average;

}


function createNumberDiv() {

  let divNumber = document.createElement("div");
  divNumber.innerHTML = Math.floor(Math.random () * 100);

  divNumber.addEventListener("click", function(){
    
    divNumber.classList.toggle("selected");
      updateResults("selected");
      
  });

  return divNumber;

}


function getArrayOfSelectedNumbers (className) {

  let arrayElements = Array.from(document.querySelectorAll("." + className));

  let arrayNumbers = [];

  for (let i = 0; i < arrayElements.length; i++) {

    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);

  }

  return arrayNumbers;

}


function gridMaker(gridContainer,R, C) {

  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

  gridContainer.innerHTML = "";

  for (let r = 0; r < R; r++) {

    for (let c = 0; c < C; c++) {

          gridContainer.appendChild( createNumberDiv() );

    }
  }  
}


function roundString(numberWithManyDecimals, decimals){

  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);

}


function updateResults (className){

  let arrayNumbers = getArrayOfSelectedNumbers(className);

  document.querySelector("#results > div:nth-child(1) > span").innerHTML = " " + arrayNumbers.join();
  document.querySelector("#results > div:nth-child(2) > span").innerHTML = " " + arrayNumbers.length;
  document.querySelector("#results > div:nth-child(3) > span").innerHTML = " " + adder(arrayNumbers);
  document.querySelector("#results > div:nth-child(4) > span").innerHTML = " " + averg(arrayNumbers);

}



// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector("button").addEventListener("click", function () {

  let rows = parseInt(document.getElementById("inputRows").value);
  let cols = parseInt(document.getElementById("inputCols").value);

  gridMaker( document.querySelector("#grid"), rows, cols);

})


// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.


gridMaker(document.querySelector("#grid"),
 
  parseInt(document.getElementById("inputRows").value),
  parseInt(document.getElementById("inputCols").value)
   
  );
