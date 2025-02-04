"use strict";

/*

NOTE
As you know, variables do not store an array but a reference to
an array (as explained in class).
So the correct thing is to always talk about references to arrays.
However, this is very seldom done. Instead, one speaks of a variable
"containing an array". This is what you will see on the internet also
when you look for information.


People also always say that a function "returns an array" (if it does return one).
Strictly speaking, this is incorrect and one should say that the function
"returns a reference to an array". But no-one does that.

To help you get used to how people actually talk I will also
say that a function returns an array and that a variable contains (stores)
an array.


*/


/*

Exercise 1
Code a function F1 that takes an array (a reference to an array) with 5 elements as argument (parameter)
and returns a new array (a reference to a new array) 
that contains the first and last elements of the argument (parameter)

*/

let a1 = [1, 2, 3, 4, 5]; // a1 has five elements (or five cells)
// F1( a1 ) must return the array [1, 5]
// Tip: You may use console.log to see what F1( a1 ) returns.
// As in: console.log( F1( a1 ) );

let a2 = ["i", "b", "f", "m", "a"];
// F1( a2 ) must return the array ["i", "a"]


function F1 ( _array ) {
  let first = _array[0];
  let last = _array[4];
  return [ first, last ];
}


console.log(F1(a1))
console.log(F1(a2))

/*

Exercise 2
Code a function F2 that takes an array with any number of elements
and returns a new array that contains the first and last elements.

The difficulty here is that we do not know in advance how many elements
the array will have. Luckily, we have .length that tells us how many
elements an array has. So you need to use that :-) to solve this problem

*/


// F2( a1 ) must return the array [1, 5], just as F1( a1 ) did.

let a3 = ["Malmö", "Landskrona", "Helsingborg"];
// F2( a3 ) must return the array ["Malmö", "Helsingborg"]

function F2 ( _array ) {
  let first = _array[0];
  let nElements = _array.length;
  let last = _array[nElements - 1]; // The last index is always that number of elements
                                    // minus one (because the first index is zero).

  return [first, last];
}

console.log(F2(a1))
console.log(F2(a3))



/*

Exercise 3
Code a function F3 that takes any array as an argument and logs on the
console each one of the array's elements.

Note that, as previously, we do not know beforehand how many elements
the argument has. So you again need to use .length 

*/


F3( a1 ); // This must result in all the elements of a1 being logged, one by one.

function F3( _array ) {
  for ( let i = 0; i < _array.length; i++ ) {
    console.log( _array[i] );
  }
}





/*

Exercise 4
Study the code below and predict what will be logged.


*/



let A1 = [ 1, 2, 3, 4, 5 ];
let A2 = [ 2, 4, 6, 8, 10, 12];
function FF1 ( _array ) {
  return _array[0] + _array[_array.length - 1];
}
function FF2 ( n1, n2, n3 ) {
  return [ n1, n2, n3 ];
}

// Here we go:
// console.log( A1[0] + A1[1] );
// console.log( A1[6] + 3);
// console.log( A1[0] + A2[0] );
// console.log( A1[0] + A2[ A2.length ] );
// console.log( A1[0] + A2[ A2.length - 1 ] );
// console.log( FF1( A1 ) + FF1( A2 ) );
// console.log( FF2( 1,2,3 )[0] );
// console.log( FF2( 1,2,3 )[1] + FF1( FF2( 1,2,3 ) ) );