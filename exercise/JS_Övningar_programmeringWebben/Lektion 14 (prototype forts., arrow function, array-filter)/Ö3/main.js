// You array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// NOTE: remember that the function passed to the .filter method must return
// true or false, if it returns true the value stays it not it gets "filtered"
// out.

// 0. Filter out all numbers above 10 (this is a mind-bender, you'll have to think in reverse, kind of)
numbers.filter((number) => number <= 10);

// 1. Keep the even numbers
console.log(numbers.filter(number => number % 2 == 0));
console.log(numbers.filter((n) => n % 2 == 0));

// 2. Keep the odd numbers
console.log(numbers.filter(number => number % 2 == 1));

// 3. Filter out all values that are divisible by 3 (ie. 3, 6, 9, etc.)
console.log(numbers.filter(number => number % 3 == 0));

// 4. Keep values that are divisible by 5
console.log(numbers.filter(number => number % 5 == 0));

// 5. Filter out all numbers below 10
console.log(numbers.filter(number => number <= 10 ));


// Mosh Youtube https://www.youtube.com/watch?v=4_iT6EGkQfk
numbers.filter((value) => value >= 0);

// // https://www.youtube.com/watch?v=qmnH5MT_luk 
// let string = "It was a dark and stormy night";
// let words = string.split(/\W+/).filter(word => word.length); // /\W+/ anyting that is not a word charakter 
// console.log(words);