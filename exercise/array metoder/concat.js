let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(numbers);

// 1. ".concat" merge two, or more, arrays - from left to right
numbers = numbers.concat([21, 22, 23, 24, 25]);
console.log(numbers);
// or with a variable
let moreNumbers = [26, 27, 28, 29, 300];
numbers = numbers.concat(moreNumbers);
console.log(numbers);
// add multiple arrays
numbers = numbers.concat(moreNumbers, [11, 33, 44, 5, 66]);
console.log(numbers);

////Array Metohd CONCAT
// https://www.youtube.com/watch?v=PHgeshcXtDc Florin Pop
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [7, 8, 9];

    //merge two or more array into one 
    // dosent change the array create a copy of the array and manipulate the new array  
    const abc = a.concat(b, c);
    console.log(abc)
    // CONCAT can also work like a push method 
    const abcd = a.concat(1, 2);
    console.log(abcd);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat