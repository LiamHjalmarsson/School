// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

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

// acc = 0 and curent item = cur start att 0 and add on the mass
// get total mass of all characters 
// const totalMass = characters.reduce((acc, cur) => {
//     return acc + cur.mass;
// }, 0)

const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass)

// get total height of all charaters 
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);

console.log(totalHeight)

// get total number of charaters bye eye color 
const eyeColor = characters.reduce((acc, cur) => {
    if(acc[cur.eye_color]) {
        acc[cur.eye_color] = acc[cur.eye_color] + 1
        // acc[cur.eye_color]++
    } else {
        acc[cur.eye_color] = 1
    }
    return acc
}, {})

console.log(eyeColor)

// get total number of characters in all the character name 
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)

console.log(totalNameCharacters)