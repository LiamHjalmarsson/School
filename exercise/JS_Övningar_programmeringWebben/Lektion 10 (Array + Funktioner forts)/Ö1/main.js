// Placera din funktion efter denna array
let dogs = [
    {
        name: "Arya",
        breed: "Husky",
        age: 5
    },
    {
        name: "Charlie",
        breed: "Pudel",
        age: 3
    },
    {
        name: "Erik",
        breed: "Shiba",
        age: 3
    },
    {
        name: "Sebbe",
        breed: "Husky",
        age: 5
    },
    {
        name: "Billie",
        breed: "French Bulldog",
        age: 8
    },
    {
        name: "Alfred",
        breed: "Border Collie",
        age: 5
    }
];

function getAverageDogAge (dogs) {
    let sum = 0;

    dogs.forEach(dog => {
        sum += dog.age 
    });

    return Math.round(sum / dogs.length)
}