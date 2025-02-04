// 4. ".map", takes a function, the result of this function will replace each element in the array
// let doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers)

// let dogNames = dogs.map((dog) => dog.name);
// console.log(dogNames);

    //////--- JAMES Q QUICK MAP https://www.youtube.com/watch?v=G6J2kl1aVao 

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
    

    // MAP goes fro each item in the array and allow us to tranform each item in some way
    // the result will be another array with a transformed item from each one of the original items in the array
    
    // Get an array of all names
    let charactersName = characters.map(character => character.name);
    console.log(charactersName)

    // Get an array of all heights
    let charactersHeight = characters.map(character => character.height);
    console.log(charactersHeight);

    // Get an array of objects with just name and height properties
    let charactersMinRecourd = characters.map(character => ({
        name: character.name,
        height: character.height
    }));
    console.log(charactersMinRecourd);

    // Get an array of all first names
    let firstNamesCharacters = characters.map(character => character.name.split(' ')[0]); 
    console.log(firstNamesCharacters);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/mapsss