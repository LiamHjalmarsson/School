"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/
      
function createNumberDiv() {
        let div = document.createElement("div");
        div.innerHTML = Math.floor(Math.random () * 100);

        return div;
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
    

    function gridMaker(gridContainer,R, C) {

        gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

        
        gridContainer.innerHTML = "";

        for (let i = 0; i < R * C; i++) {

                gridContainer.appendChild( createNumberDiv() );


        }

    }


document.querySelector("button").addEventListener("click", function () {

        let rows = parseInt(document.getElementById("inputRows").value);
        let cols = parseInt(document.getElementById("inputCols").value);
    
        gridMaker( document.querySelector("#grid"), rows, cols);
    })
    
    

