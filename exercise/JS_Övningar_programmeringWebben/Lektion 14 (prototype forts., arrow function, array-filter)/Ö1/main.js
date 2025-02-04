"use strict";

function Movie (name, year, typ, rating) {
    this.name = name,
    this.year = year,
    this.typ = typ,
    this.rating = rating
}

let movie1 = new Movie("Togo", 2019, "Adventure", 10);
let movie2 = new Movie("Hachi: A Dog's Tale", 2009, "Biography", 10);
//

function MovieDatabase () {
    this.movies = []
}

MovieDatabase.prototype.add = function (movie) {
    this.movies.push(movie)
}

let movieDatabase = new MovieDatabase();
movieDatabase.add(movie1);
movieDatabase.add(movie2);

console.log(movieDatabase)

// 

MovieDatabase.prototype.toString = function () {
    let counter = 0; 
    this.movies.forEach(movie => {
        console.log(` ${counter + 1}. ${movie.name} (${movie.year}), ${movie.typ}, ${movie.rating}/10`)
        counter++
    });
}

// To print the contents either do this:
// 
// Or something like this (personally I'd recommend the first one):
// movieDatabase.print();
//
// Expected output:
// "1. Togo (2019), Adventure, Grade: 10/10"
// "2. Hachi: A Dog's Tale (2009), Biography, Grade: 10/10"



console.log(String(movieDatabase));   //<-- NOTE: String(movieDatabase)