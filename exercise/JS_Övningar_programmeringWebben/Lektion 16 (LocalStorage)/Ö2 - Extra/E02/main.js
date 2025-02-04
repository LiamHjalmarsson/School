"use strict";

// Initialize our kennel (our database of dogs)
let kennel = new Kennel();

// Renders a dog object into a HTML element
function renderDog(dog) {
    let div = document.createElement("div");
    div.classList.add("dog");
    div.id = dog.id;

    div.innerHTML = `
        <div>${dog.name}</div>
        <div>${dog.breed}</div>
        <div>${dog.age}</div>
        <button type="button">Remove</button>
    `;

    return div;
}

// Renders an array of dogs into HTML
function renderDogs(dogs) {
    // debugger;
    let dogsElement = document.getElementById("dogs");
    dogsElement.innerHTML = "";

    for (let dog of dogs) {
        let dogElement = renderDog(dog);
        dogsElement.appendChild(dogElement);
    }
    // Add remove-handlers for our dogs
    setRemoveDogHandlers();
}

// When <form id="add-dog-form"> is submitted
function onAddDogSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let breed = document.getElementById("breed").value;
    let age = Number(document.getElementById("age").value);
    let dog = { name: name, breed: breed, age: age };
    kennel.addOne(dog);

    let dogs = kennel.getAll();
    renderDogs(dogs);

    this.reset();
}

// Add "click" event handler to <button id="add">
function setAddDogHandler() {
    let form = document.getElementById("add-dog-form");
    form.addEventListener("submit", onAddDogSubmit);
}

// When a user clicks the remove-dog-button
function onRemoveDogClick() {
    let id = this.parentElement.id;
    console.log(this, id);
    kennel.removeById(id);
    let dogs = kennel.getAll();
    renderDogs(dogs);
}

// Add "click" event handler to all remove-buttons
function setRemoveDogHandlers() {
    let buttons = document.querySelectorAll(".dog button");

    for (let button of buttons) {
        button.addEventListener("click", onRemoveDogClick);
    }
}

// Filter dogs by name
function onFilterByNameSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("filter-name").value;
    let dogs = kennel.byName(name);
    renderDogs(dogs);
}

// Filter dogs by breed
function onFilterByBreedSubmit(event) {
    event.preventDefault();
    let breed = document.getElementById("filter-breed").value;
    let dogs = kennel.byBreed(breed);
    renderDogs(dogs);
}

// Filter dogs by age
function onFilterByAgeSubmit(event) {
    event.preventDefault();
    let age = document.getElementById("filter-age").value;
    let dogs = kennel.byAge(age);
    renderDogs(dogs);
}

function onShowAllClick() {
    document.getElementById("filter-name").value = "";
    document.getElementById("filter-breed").value = "";
    document.getElementById("filter-age").value = "";
    let dogs = kennel.getAll();
    renderDogs(dogs);
}

function setFilterDogHandlers() {
    let nameForm = document.getElementById("filter-by-name");
    let breedForm = document.getElementById("filter-by-breed");
    let ageForm = document.getElementById("filter-by-age");
    let showAll = document.getElementById("show-all");

    nameForm.addEventListener("submit", onFilterByNameSubmit);
    breedForm.addEventListener("submit", onFilterByBreedSubmit);
    ageForm.addEventListener("submit", onFilterByAgeSubmit);
    showAll.addEventListener("click", onShowAllClick);
}

// Initialize the page
let dogs = kennel.getAll();
renderDogs(dogs);
setAddDogHandler();
setFilterDogHandlers();