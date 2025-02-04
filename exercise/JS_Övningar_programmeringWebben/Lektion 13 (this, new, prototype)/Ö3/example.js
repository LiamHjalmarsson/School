// EXEMPEL
// =======

// Vårt objekt (dvs. vår konstruktor-funktion)
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

// Vår metod (funktion) `getFullName` returnerar för- och efternamn
// tillsammans separerat med ett mellanslag.
Person.prototype.getFullName = function () {
    return this.firstname + " " + this.lastname;
};

// Metoden `sayHello` returnerar en kortare hälsning innehållande både
// för- och efternamn samt åldern.
Person.prototype.sayHello = function () {
    return "Hello my name is " + this.getFullName() + " and I'm " + this.age + " years old";
};

// Metoden `toString` är en unik funktion, när denna finns så kan vi styra
// utskriften av vårt objekt
Person.prototype.toString = function () {
    return this.getFullName() + " (" + this.age + ")";
};

// Skapa en ny instans (ett nytt objekt)
let sherlock = new Person("Sherlock", "Holmes", 38);
console.log(sherlock);
// I webbkonsolen kan ni klicka runt i objektet för att se alla attribut

let name = sherlock.getFullName();
console.log(name);
// => "Sherlock Holmes"

let greeting = sherlock.sayHello();
console.log(greeting);
// => "Hello my name is Sherlock Holmes and I'm 38 years old"

// Om vi konvertera vårt objekt till en sträng så anropas metoden `toString`
console.log(String(sherlock));
// Vad får vi för utskrift?
