// Palindrome  

/*
write a function to determine if the supplied string is a palindrome 
Eg: radar, racecar, kayak, and redder are all palidromes 
They are speleld same backwards and forwards 

*/

let palidromes = function (string) {
    return string == string.split("").reverse().join("");
}

// console.log(palidromes("radar"));
// console.log(palidromes("redder"));
// console.log(palidromes("window"));