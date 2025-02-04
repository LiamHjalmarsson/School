"use strict";


/*

SOME BASIC KNOWLEDGE ABOUT STRINGS IN JS

There are three kinds of quotation marks (QMs) in JS

Double: "string"
Single: 'string'
Backticks: `string`

*/

// Double and Single work in exactly the same way.
// It's useful to have both in case we need to use QMs inside a string.

// Try uncommenting the line below. Why does it not work?
// let _a = 'Don't do this';

let a = "Don't do this"; // We can place single QMs in the string inside double QMs
let b = 'She said "No" to her'; // We can place double QMs inside single QMs

// Backticks work differently. See Template Literals below






/*

CONCATENATION

To concatenate two strings is to put them together,
one after the other.

NOTE: No space will be added between them

*/

let s1 = "MPP";
let s2 = "Rules!";

let s3 = s1 + s2;       // s3 contains the string "MPPRules!"
let s4 = s1 + " " + s2; // s4 contains the string "MPP Rules!"






/*

ACCESSING CHARACTERS IN A STRING

We can access different characters in a string with the
use of brackets: [].
(Yes, it's the same notation as for arrays. But strings ARE NOT arrays)

The first character in a string has index 0

*/

let ss1 = "Malmö";
let ss2 = ss1[0];       // ss2 contains "M"
let ss3 = ss1[1];       // ss3 contains "a"
let ss4 = ss1[2] + ss2; // ss4 contains "lM"





/* 

TEMPLATE LITERALS

A string expressed with backticks is called a Template Literal
Template literals give us a more flexible way of joining strings.

*/

// 1) Template Literals accept line breaks
let aa =   `one line
           two lines`; // This does not work with single or double QMs (try it!)

// 2) Template literals can include placeholders for variables
//    Placeholders are created with ${}
let bb = "Don't do this";
let cc = `Let's all say: "${bb}"`;
console.log(cc);
// as you can see, we can place single and double QMs inside backticks
