"use strict";

// Constructor
function Kennel() {
    let dogs = localStorage.getItem("dogs");

    if (dogs == null) {
        this.dogs = [];
    } else {
        this.dogs = JSON.parse(dogs);
    }

    // If we initialized our Kennel with dogs, ie. `new Kennel([...array of dogs...])`
    // if (dogs.length > 0) {
    //     this.add(dogs);
    // }
}

// Add an array of dogs
Kennel.prototype.add = function (dogs) {
    for (let dog of dogs) {
        this.addOne(dog);
    }
};

// Add a single dog (we'll also generate a new ID for it)
Kennel.prototype.addOne = function (dog) {
    let id = this.getNextId();
    let newDog = new Dog(id, dog.name, dog.breed, dog.age);
    this.dogs.push(newDog);

    // Store all our dogs in LocalStorage
    let dogs = JSON.stringify(this.dogs);
    localStorage.setItem("dogs", dogs);
};

// Calculates the next ID for a dog
Kennel.prototype.getNextId = function () {
    if (this.dogs.length == 0) {
        return 1;
    }

    return this.dogs[this.dogs.length - 1].id + 1;
};

// Removes a dog by ID from our kennel
Kennel.prototype.removeById = function (id) {
    this.dogs = this.dogs.filter((dog) => dog.id != id);
    // Store all our dogs in LocalStorage
    let dogs = JSON.stringify(this.dogs);
    localStorage.setItem("dogs", dogs);
};

// Returns all dog
Kennel.prototype.getAll = function () {
    return this.dogs;
}

// Returns all dogs by `name`
Kennel.prototype.byName = function (name) {
    return this.dogs.filter((dog) => dog.hasName(name));
};

// Returns all dogs by `breed`
Kennel.prototype.byBreed = function (breed) {
    let dogBreed = this.dogs.filter((dog) => dog.isBreed(breed));
    console.log(dogBreed)
    return dogBreed
};

// Returns all dogs by `age`
Kennel.prototype.byAge = function (age) {
    return this.dogs.filter((dog) => dog.hasAge(age));
};