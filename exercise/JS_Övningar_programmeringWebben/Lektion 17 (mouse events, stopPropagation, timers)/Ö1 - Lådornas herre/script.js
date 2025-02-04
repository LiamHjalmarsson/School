"use strict";


/*
  Övning 1
  ========

  Se video för slutresultat. All HTML och CSS är redan färdig.

  Del 1
  =====

  Gör så att varje låda är klickbar, när vi klickar på en låda ska ni skriva ut
  "You clicked on: <lådans HTML>" i paragrafen med id "info".

  Två saker behöver ni tänka på här:
    
    1. För paragrafen, eftersom ni ska placera HTML i denna, använder ni er av
       ".textContent" istället för ".innerHTML", den första tillåter inte HTML,
       utan skriver ut det istället (vilket vi vill).
    2. För att få ett elements HTML använder vi ".outerHTML".
  
  OBS!
  ====
    - Eftersom detta ska ske på flera div:ar (box-1, box-2, osv.) så gör en
      for-loop (eller dylikt), ni ska alltså inte skriva ".addEventListener" 6
      gånger.
    - Ni ska dessutom ENDAST göra en funktion som ni lägger på samtliga av dessa
      event-lyssnar, vilket innebär att ni måste använda er av "event.target"
      (eller "this").

  Del 2
  =====

  Gör så att när vi klickar på <body> så försvinner texten inom vår paragraf.
  Här kommer ni stöta på ett problem, nu när ni klickar på lådorna så bubblar
  eventet upp till <body> också, detta måste ni avbryta på något vis.

*/


let boxes = document.querySelectorAll("#boxes > div");
console.log(boxes);

let info = document.querySelector("#info");

let body = document.body;

function boxListener () {
  boxes.forEach(box => box.addEventListener("click", description));
}

function description (event) {

  event.stopPropagation();

  let target = event.target.outerHTML;
  let text = "You click on";

  info.innerText = target + text
}

function clearDescription () {
  info.innerHTML = ""
}

body.addEventListener("click", clearDescription)

boxListener();