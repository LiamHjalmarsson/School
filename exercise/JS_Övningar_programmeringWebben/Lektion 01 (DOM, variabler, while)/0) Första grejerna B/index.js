"use strict";

// Ställ sidans bakgrundsfärg till tomato med JS
let body = document.body

body.style.backgroundColor = "tomato"

// Ändra, med JS, siffrorna på sidan till svenska.
let div1 = document.querySelector("div > div:nth-child(1)")
let div2 = document.querySelector("div > div:nth-child(2)")
let div3 = document.querySelector("div > div:nth-child(3)")

div1.innerHTML = "Ett"
div2.innerHTML = "Två"
div3.innerHTML = "Tre"

// Ställ unos (ettans) bakgrundsfärg till hotpink med JS
div1.style.backgroundColor   = "hotPink"


// Lägg till, med JS, en div till gridden med siffran "fyra"
let newDiv = document.createElement("div")
newDiv.innerHTML = "Fyra"

document.querySelector("div").append(newDiv)


