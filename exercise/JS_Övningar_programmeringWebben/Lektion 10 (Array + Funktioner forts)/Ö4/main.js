let db = []

function CreateNewDogByPrompt (database) {
    let name = prompt("Enter the name of the dog");
    let breed = prompt(`Enter the breed of ${name}`);
    let age = parseInt(prompt(`Enter the age of ${name} ${breed}`));

    let dog = {
        name: name, 
        breed: breed,
        age: age,
    }

    let confrimg = confirm(`Is everything correct ${name} ${breed} ${age} and want to add?`);

    if (confrimg) {
        database.push(dog);
        alert(`The dog ${name} was added`);
    } else {
        alert(`Dog was not added`)
    }

}

