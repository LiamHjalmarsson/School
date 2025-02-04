"use strict";

/*

We use the same operator (+) to add numbers and to concatenate strings
This can lead to weird stuff

*/

let n1 = 1;
let n2 = 3;
let n3 = n1 + n2; // n3 contains the number 4, no weird stuff
                  // log it and check!


let s1 = "a";
let s2 = "b";
let s3 = s1 + s2; // s3 contains the string "ab", no weird stuff


// But...
// What happens if we use + with a number and a string?
let w1 = s1 + n1;
/*
If there is a string in the opration, the web browser will always concatenate
So w1 will contain the string "a1".
This feels natural because you cannot add a string to a number and get a number. What number would that be?

This is so even if the string represents a number!
Remember: The computer does not understand the content of a string.
*/

let s4 = "2";     // This is a string, not a number!
let w2 = s4 + n1; // w2 contains the string "21"
let w3 = 2 + 1 + 4 + s4; // w3 contains the string "72" (2 + 1 + 4 = 7)


// The weirdness above comes from the fact that we use the same operator (+)
// to add numbers and to concatenate strings.
// Other mathematical operators (such as *, multiplication) that are only used
// for maths, work differently.
let w4 = 3 * s4; // w4 contains 6, even if s4 is a string! (because s4 contains a "number-string")

let w5 = 3 * "e"; // w5 contains NaN, a special value that means "not a number"
                  // Because it makes no sens to multiply "e" with 3





