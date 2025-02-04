
//// ARRAY METHOD FIND florin pop https://www.youtube.com/watch?v=8SkHWeDoTf0
// search inside of the array and return the first element which returns true to value if false return undefind 
    const names = ["Liam", "Camille", "noel", "Gustavo"]; 

    let result = names.find(findCamille)

    function findCamille (item) {
        return item === "Camille"
    }

    console.log(result)

    const persons = [
        {
            name: "Camille",
            age: 23
        },
        {
            name: "Liam",
            age: 25
        },
        {
            name: "Noel",
            age: 22
        }
    ];

    const resultNoelAge = persons.find(findNoel).age;

    function findNoel (person) {
        return person.name === "Noel"
    }

    console.log(resultNoelAge)

    ////// DC CODE https://www.youtube.com/watch?v=N1QcR8F3xFY

    const people = [ 
        {
            name: "Bittan",
            occupation: "Mom"
        }, 
        {
            name: "Håkan",
            occupation: "Dad"
        }, 
        {
            name: "Celine",
            occupation: "Sister"
        }
    ]; 

    function isDad (person) {
        return person.occupation === "Dad";
    }

    // find just returns the first it finds 
    console.log(people.find(isDad).name); 

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find