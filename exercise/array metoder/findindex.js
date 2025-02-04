let people = [
    {
        name: "Dom",
        occupation: "Programmer"
    },
    {
        name: "Erik",
        occupation: "Design"
    },
    {
        name: "Tilda",
        occupation: "webb"
    },
    {
        name: "isak",
        occupation: "Design"
    },
    
]


// findIndex method search fro array to find person how is webb 

// testeing function taks in person as arrgurment 
function isWebb (person) {
    // return true or false if occuatoin is true or false 
    return person.occupation === "webb"
}


console.log(people.findIndex(isWebb));
console.log(people[people.findIndex(isWebb)]);


// findindex simulare to find method but findindex will find the element and return it index and find find and returns it 
const numbers = [1, 2, 4, 5, 3]; 

let result = numbers.findIndex(findThree)

function findThree(value) {
    return value === 3
}

console.log(result)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex