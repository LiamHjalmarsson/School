function CreateNewDogByPrompt () {
    let name = prompt("Enter the name of the dog");
    let breed = prompt(`Enter the breed of ${name}`);
    let age = parseInt(prompt(`Enter the age of ${name} ${breed}`));

    let dog = {
        name: name, 
        breed: breed,
        age: age,
    }

    return dog
}