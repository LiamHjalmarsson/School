"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

      
function createNumberDiv() {
    let div = document.createElement("div");
    div.innerHTML = Math.floor(Math.random () * 100);

    div.addEventListener("click", function(){
     
        div.classList.toggle("selected");

    })

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


// function gridMaker(gridContainer,R, C) {
//         gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
//         gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

//         for ( let i = 0; i < R * C; i++ ){
//                 gridContainer.appendChild( createNumberDiv() );
//         }
// }


document.querySelector("button").addEventListener("click", function () {

    let rows = parseInt(document.getElementById("inputRows").value);
    let cols = parseInt(document.getElementById("inputcools").value);

    gridMaker( document.querySelector("#grid"), rows, cols);

    
})

