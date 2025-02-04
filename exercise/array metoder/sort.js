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

// sort 

// Sort by mass
const bymass = characters.sort((a, b) => {
    return a.mass - b.mass
})

console.log(bymass)

// Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height)

console.log(byHeight)

// Sort by name
const byName = characters.sort((a, b) => {
    if(a.name < b.name) {
        return -1
    } else {
        return 1
    }
})

// Sort by gender
const bygender = characters.sort((a, b) => {
    if (a.gender === "female ") { 
        return -1
    } else {
        return 1
    }
})