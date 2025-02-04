// "use strict";

// let body = document.querySelector( "body" );

// // Create the grid
// let wrapper = document.createElement( "div" );

// // Add the grid to the body
// body.appendChild( wrapper );

// // Make the grid
// // Alt1: With a class
// wrapper.classList.add( "gridder" );
// // Alt2: With style
// wrapper.style.display = "grid";
// wrapper.style.width = "50vh";
// wrapper.style.height = "50vh";



// // Create the corners
// let c1 = document.createElement( "div" );
// let c2 = document.createElement( "div" );
// let c3 = document.createElement( "div" );
// let c4 = document.createElement( "div" );

// // Add them to the wrapper
// wrapper.appendChild( c1 );
// wrapper.appendChild( c2 );
// wrapper.appendChild( c3 );
// wrapper.appendChild( c4 );

// // Colour them
// c1.style.backgroundColor = "tomato";
// c2.style.backgroundColor = "tomato";
// c3.style.backgroundColor = "tomato";
// c4.style.backgroundColor = "tomato";


// // Place them
// // Alt1: With a class (do this yourself)

// // Alt2: With style
// c1.style.gridArea = "1/1/2/2";
// c2.style.gridArea = "3/1/4/2";
// c3.style.gridArea = "3/3/4/4";
// c4.style.gridArea = "1/3/2/4";


// 

let body = document.body

let wrapper = document.createElement("div")
wrapper.classList.add("gridder");
body.append(wrapper)


function div (grid) {
    let div = document.createElement("div");
    div.style.backgroundColor = "tomato"

    div.style.gridArea = grid;
    wrapper.append(div)
}


let div1 = div("1/1/2/2")
let div2 = div("3/1/4/2")
let div3 = div("3/3/4/4")
let div4 = div("1/3/2/4")
