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

// some == at elast one item meats a condtion


// Is there at least one male character?
const oneMaleCharacter = characters.some((character) => character.gender === "male")

console.log(oneMaleCharacter)

// Is there at least one character with blue eyes?
const oneBlueEye = characters.some((character) => character.eye_color === "blue")

console.log(oneBlueEye
    )
// Is there at least one character taller than 210?
const tallerThan200 = characters.some((character) => character.height > 210);

console.log(tallerThan200)

// Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some((character) => character.mass < 50)
 

console.log(massLessThan50)