// object orienterat vi har en class den etiket vill gruppera våra variabler // egenskaper och metoder
// class Person {
    // name;

    // constructor(name) {
        // this.name = name;
    // }

    // render() {
        // return `<p>${this.name}</p>`
    // }
// }

// skapar en ny instans 
// Kolla att variablen är instance av varibalen tex Person person instaceof Person
// let person1 = new Person("Liam");
// let person2 = new Person("Camille");

// document.body.innerHTML = `${person1.render()} ${person2.render()}`

// function Person(name) {
//     this.name = name;
// };

// Person.prototype.render = () => {
//     return `<p>${this.name}</p>`
// };

// let person1 = {
//     name: "liam",
//     render: function () {
//         return `<p>${this.name}</p>`
//     }
// }

// let person2 = {
//     name: "liam",
//     render: function () {
//         return `<p>${this.name}</p>`
//     }
// }



// ARV 

class Animal {
    type = "Unkown";
    name = "";

    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi! Im a ${this.type} and my name is ${this.name}`;
    }
}

class Dog extends Animal {
    type = "Dog";


}

class Cat extends Animal {
    type = "Cat";


}

class Golden extends Dog {
    breed = "Golden Retriver";
    age; 

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greet() {
        return `This is the best food ever! But getting old ${this.age}`;
    }

}