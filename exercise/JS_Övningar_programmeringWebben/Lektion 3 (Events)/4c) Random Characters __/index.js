"use strict";

/*

A note on ASCII codes:
For several reasons, it is interesting to make a list of all the characters
that can be used in a computer and give each character a number. This is called
"character encoding".
One such list is the ASCII table. ASCII is the most used character encoding.

Here is the ASCII table:
https://ascii-tables.com/

There are a number of weird characters at the beginning of the list (Null, Start of Header, etc).
We won't spend any time with those right now.
From number 32 and on, however, it makes more sense. (Space = mellanslag)

Note that the numbers that represent the characters from A to Z are 65 to 90.

So... in JS, how do we move between the number and the character?


From number (code) to character
String.fromCharCode( number )
So:
console.log( String.fromCharCode(66) );
will log B on the console.


From character to code
"B".charCodeAt( 0 ) returns 66 (66 is the code for B)
So:
console.log( "E".charCodeAt( 0 ) );
will log 69 on the console.

Note that upper-case letters (A-Z) have different codes than lower case letters (a-z).
In programming, lower-case letters are NOT related to their upper-case versions.
So, for instance, the variable A is completely different and independent from the variable a.
And, for instance, let is a command but LET, or Let, or LeT are not a command.

*/



// 1) Declare and initialize (if possible) global variables
// (no need in this case)



// 2) Assign the event listeners for the existing HTML-elements
// (no existing HTML-elements that require event listeners)



// 3) Direct code
// Code that creates the HTML-elements for the grid and "writes" a random character in each.

for (let i = 0; i < 25; i++) {
  let div = document.createElement("div");
  div.innerHTML = randomCharA_Z();

  div.addEventListener("click", function () {
    div.innerHTML = randomCharA_Z()
  })

  document.querySelector("#container").append(div)
}


// 4) Function declarations

// The function below will, each time it is called,
// return one random number, between 65 and 90 (both inclusive)
function randomNumber () {
  return Math.floor( 65 + 26 * Math.random() );
}

// Use String.fromCharCode and randomNumber to write a function
// that, each time it is called, returns one random character 
// between A and Z. 
function randomCharA_Z () {
  return String.fromCharCode(randomNumber())
}
