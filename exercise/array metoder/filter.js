//// James q Quick https://www.youtube.com/watch?v=3LOEGS4qcRM&t=168s
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// filterd takes a call back function in it we get a refrens to each individual item (characters) 
// and return true or false 
// take a array of items and select witch ones you want based on a filter

// get characters with mass grater than 100
const greater100Chareters = characters.filter(character => character.mass > 100);
console.log(greater100Chareters);

// get characters with height less than 160
const shorterCharacters = characters.filter(character => character.height < 160);
console.log(shorterCharacters);

// all male characters
const maleCharacters = characters.filter(character => character.gender === "male");
console.log(maleCharacters);

// get all feamel charaters 
const femaleCharacters = characters.filter(character => character.gender === "female");
console.log(femaleCharacters);



// THe Coding Train https://www.youtube.com/watch?v=qmnH5MT_luk

// let valuesNumber = [5, 4, 9, 2, 1]

// function isEven(number) {
//     return number % 2 == 0
// }

// // can do x => (x % 2 == 0);
// let valsShow = valuesNumber.filter(x => x % 2 == 0); 

// let vals = valuesNumber.filter(isEven);
// console.log(vals)

// // Your array
// let dogs = [
//     { name: "Arya", breed: "Husky", age: 5 },
//     { name: "Charlie", breed: "Pudel", age: 3 },
//     { name: "Erik", breed: "Shiba", age: 3 },
//     { name: "Sebbe", breed: "Husky", age: 2 },
//     { name: "Billie", breed: "French Bulldog", age: 8 },
//     { name: "Alfred", breed: "Border Collie", age: 5 }
// ];

// // // Returns all dogs by `age`
// // Kennel.prototype.byAge = function (age) {
// //     // NOTE: This uses both the array method "filter"
// //     //       And the "arrow function" syntax,
// //     //       ie. (params, ...) => value-to-be-returned
// //     //
// //     //       Lastly, rember that array methods (in general)
// //     //       take a function that will be called with each
// //     //       element(item) from the array
// //     this.dogs.filter((dog) => dog.age == age);
// // };

// // 1. Keep all the dogs whose first name starts with an "A"
// console.log(dogs.filter((dog) => dog.name[0] == "A"));

// // 2. Filter out all dogs whose age is less then 6
// console.log(dogs.filter((dog) => dog.age > 6));
// // 3. Keep only the French Bulldogs
// console.log(dogs.filter((dog) => dog.breed == "French Bulldog"))

// // 4. Keep only the Huskies that are older then 2 (in this case you'll have to do 2 comparisons)
// console.log(dogs.filter((dog) => dog.breed == "Husky" && dog.age > 2));


// /// mosh filter https://www.youtube.com/watch?v=4_iT6EGkQfk
// const number = [1, -1, 2, 3];
// const filterd = number.filter((value) => value >= 0);

// console.log(filterd)

// // You array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// // NOTE: remember that the function passed to the .filter method must return
// // true or false, if it returns true the value stays it not it gets "filtered"
// // out.

// // 0. Filter out all numbers above 10 (this is a mind-bender, you'll have to think in reverse, kind of)
// numbers.filter((number) => number <= 10);

// // 1. Keep the even numbers
// console.log(numbers.filter((number) => number % 2 == 0 ));

// // 2. Keep the odd numbers
// console.log(numbers.filter((number) => number % 2 == 1 ));

// // 3. Filter out all values that are divisible by 3 (ie. 3, 6, 9, etc.)
// console.log(numbers.filter((number) => number % 3 == 0 ));

// // 4. Keep values that are divisible by 5
// console.log(numbers.filter((number) => number % 5 == 0 ));

// // 5. Filter out all numbers below 10
// console.log(numbers.filter((number) => number > 10))




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter