"use strict";

/*

Let's do some stuff with arrays to get the hang of it
Use Firefox for this (use always Firefox in this course)

*/

let _a = [];  // This line does a few things:
              // 1) Declares a variable called _a
              //    1A: Reserves space in the memory to store a value
              //    1B: Gives this space a name (address): _a
              // 2) Reserves space in the memory to store several values (the array)
              // 3) Creates a reference (address) to that space
              // 4) Stores that reference in the variable _a


// Log a on the console 
// console.log( _a );

// The console shows the array whose reference is stored in _a

// Look at the Console and click on the triangle before the word Array
// That "opens" the array and shows it contents in the console
// But the array in a is empty, so there's nothing to show apart from length:0

// length tells us how many elements there are in the array (0 so far)
// We can access that value:
// console.log( a.length );


// We place a value in the first cell
_a[0] = 1;

// Check the length of _a


_a[1] = _a[0] + _a[1];
// What value will the second cell in _a contain?


// We assign a new array to _a (actually, we assign the reference to a new array )
_a = [ "Malmö", "Malaga", "Madrid" ];

// Chage the value of the second cell to "Marseille"
_a[1] = "Marseille"

// Place the value "Margalef" in the fourth cell
_a[3] = "Margalef"

console.log(_a)

// Use a loop to log each of the cities on the console.
for (let i = 0; i < _a.length; i++) {
    console.log(_a[i])
}

// Use a loop to log each of the cities but in reverse order (first Margalef, then Madrid, then Marseille, then Malmö)
for ( let i = _a.length - 1; i > 0 - 1; i--) {
    console.log(_a[i])
}
