// Arrayen där ni sparar alla nya hundar
let dogs = [];

let form = document.getElementById("add-dog-form");
// console.log(form)

function onSubmit (event) {
    event.preventDefault();

    let name = document.getElementById("dog-name").value;
    let breed = document.getElementById("dog-breed").value;
    let age = parseInt(document.getElementById("dog-age").value);

    let dog = {
        name: name,
        breed: breed,
        age: age
    }

    dogs.push(dog);

    console.log(dogs)

    form.reset();
}

form.addEventListener("submit", onSubmit);