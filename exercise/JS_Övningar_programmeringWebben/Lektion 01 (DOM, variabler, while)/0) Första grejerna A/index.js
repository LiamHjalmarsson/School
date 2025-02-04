"use strict";

// Skapa en variabel med namnet A och placera värdet "MPP" i den.
let a = "MPP"
console.log(a);

// Deklarera en funktion med namn SUM som tar emot två parameter (två siffror) och
// returnerar summan av båda.
function sum (n1, n2) {
    return n1 + n2
}


// Anropa funktionen SUM med parametrarna 5 och 12 och konsol-loggar returvärdet.
console.log(sum(5, 12))


// Använd webbläsaren som kalkylator och få fram vad 34267 x 687876 blir
function multiplication(n1, n2) {
    return n1 * n2
} 

console.log(multiplication(34267, 687876));

//arraow function för ovan 
let arrow = (n1, n2) => n1 * n2;

console.log(arrow(34267, 687876))

