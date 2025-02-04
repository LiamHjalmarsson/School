// Your array
let dogs = [
    { name: "Arya", breed: "Husky", age: 5 },
    { name: "Charlie", breed: "Pudel", age: 3 },
    { name: "Erik", breed: "Shiba", age: 3 },
    { name: "Sebbe", breed: "Husky", age: 2 },
    { name: "Billie", breed: "French Bulldog", age: 8 },
    { name: "Alfred", breed: "Border Collie", age: 5 }
];

// 1. Keep all the dogs whose first name starts with an "A"
let nameA = dogs.filter(dog => dog.name[0] == "A")
console.log(nameA)

// 2. Filter out all dogs whose age is less then 6
let ageLess = dogs.filter(dog => dog.age < 6);
console.log(ageLess)

// 3. Keep only the French Bulldogs
let frenchBullDog = dogs.filter(dog => dog.breed == "French Bulldog");
console.log(frenchBullDog);

// 4. Keep only the Huskies that are older then 2 (in this case you'll have to do 2 comparisons)
let huskeI = dogs.filter(dog => dog.breed == "Husky" && dog.age > 2);
console.log(huskeI)



/// mosh filter https://www.youtube.com/watch?v=4_iT6EGkQfk
const numbers = [1, -1, 2, 3];
const filterd = numbers.filter((value) => value >= 0);

console.log(filterd)

/////////////////////

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

// filterd takes a call back function in it we get a refrens to each individual item (carakter) and return true or false 
const greater100Chareters = characters.filter(character => character.mass > 100);
console.log(greater100Chareters);

const shorterCharacters = characters.filter(character => character.height < 160);
console.log(shorterCharacters);

const maleCharacters = characters.filter(character => character.gender === "male");
console.log(maleCharacters);

const femaleCharacters = characters.filter(character => character.gender === "female");
console.log(femaleCharacters);

// THe Coding Train https://www.youtube.com/watch?v=qmnH5MT_luk

let valuesNumber = [5, 4, 9, 2, 1]

function isEven(number) {
    return number % 2 == 0
}

// can do x => (x % 2 == 0);
let valsShow = valuesNumber.filter(x => x % 2 == 0); 

let vals = valuesNumber.filter(isEven);
console.log(vals)

