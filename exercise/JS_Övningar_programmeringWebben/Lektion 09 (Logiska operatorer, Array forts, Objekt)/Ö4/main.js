// Skriv er funktion efter denna arrayen
let dogs = [{
    "id": 1,
    "name": "Florrie",
    "breed": "Husky",
    "age": 11
}, {
    "id": 2,
    "name": "Wright",
    "breed": "Collie",
    "age": 7
}, {
    "id": 3,
    "name": "Deanna",
    "breed": "Pug",
    "age": 9
}, {
    "id": 4,
    "name": "Darryl",
    "breed": "Husky",
    "age": 10
}, {
    "id": 5,
    "name": "Gratiana",
    "breed": "Pug",
    "age": 11
}, {
    "id": 6,
    "name": "Robinson",
    "breed": "Bulldog",
    "age": 9
}, {
    "id": 7,
    "name": "Catriona",
    "breed": "Bulldog",
    "age": 10
}, {
    "id": 8,
    "name": "Rhetta",
    "breed": "Shiba",
    "age": 3
}, {
    "id": 9,
    "name": "Jere",
    "breed": "Golden",
    "age": 8
}, {
    "id": 10,
    "name": "Addia",
    "breed": "Husky",
    "age": 2
}, {
    "id": 11,
    "name": "Rance",
    "breed": "Pug",
    "age": 9
}, {
    "id": 12,
    "name": "Bethanne",
    "breed": "Pug",
    "age": 1
}, {
    "id": 13,
    "name": "Tobias",
    "breed": "Pudel",
    "age": 9
}, {
    "id": 14,
    "name": "Robinett",
    "breed": "Pug",
    "age": 11
}, {
    "id": 15,
    "name": "Broddy",
    "breed": "Shiba",
    "age": 5
}];

function getDogsByAge (dogs, age) {
    let ageArray = []

    dogs.forEach(dog => {
        if (dog.age == age) {
            ageArray.push(dog)
        }
    })

    return ageArray
}