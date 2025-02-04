// 1. Create the constructor function "Dog"
//    Parameters: name, breed, age, color

function Dog (name, breed, age, color) {
    this.name = name, 
    this.breed = breed,
    this.age = age,
    this.color = color
}

// 2. Add the methods (functions):
//    - getName, returns `name`
//    - getBreed, returns `breed`
//    - getAge, returns `age`
//    - getColor, returns `color`
//    - whoIsAGoodBoy, returns the string "me"
//    - toString, returns the string:
//        "My name is <name> and I'm a <breed> (<age> years old).
//         My fur has the shade of <color>"

Dog.prototype.getName = function () {
    return this.name
}

Dog.prototype.getBreed = function () {
    return this.breed
}

Dog.prototype.getAge = function () {
    return this.age
}

Dog.prototype.getColor = function () {
    return this.color
}

Dog.prototype.whoIsAGoodBoy = function () {
    return "me"
}

Dog.prototype.toString = function () {
    return `My name is ${this.getName()} and i am the breed ${this.getBreed()} and im ${this.getAge()} yeas old and have the color ${this.getColor()} `
}

// 3. The following code is for testing purposes, un-comment it when you want to
//    make sure you've done everythign right.

let arya = new Dog("Arya", "Husky", 5, "Gray");
console.log(arya.getName());        // Prints "Arya"
console.log(arya.getBreed());       // Prints "Husky"
console.log(arya.getAge());         // Prints 5
console.log(arya.getColor());       // Prints "Gray"
console.log(arya.whoIsAGoodBoy());  // Prints "me"
console.log(String(arya));          // Prints... (the long message above)