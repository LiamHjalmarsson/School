"use strict";

// Constructor
function Dog(id, name, breed, age) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.age = age;
}

// Returns `name` in lower case
Dog.prototype.getName = function () {
    return this.name;
};

// Check wether this dog's name is `name`
Dog.prototype.hasName = function (name) {
    return this.name.toLowerCase() == name.toLowerCase();
}

// Returns `breed` in lower case
Dog.prototype.getBreed = function () {
    return this.breed;
};

// Check wether this dog's breed is `breed`
Dog.prototype.isBreed = function (breed) {
    return this.breed.toLowerCase() == breed.toLowerCase();
}

Dog.prototype.getAge = function () {
    return this.age;
};

// Check wether this dog's age is `age`
Dog.prototype.hasAge = function (age) {
    return this.age == age;
};