/*
  Övning 4
  ========

  Se videon för slutresultatet. All HTML och CSS är redan färdigt.
  
  Del 1
  =====

  I den första delen ska ni börja med att hämta elementet med klassen ".circle".
  Kontrollera sedan om detta elementet finns (det finns ju inte från början) och
  gör följande:

    - OM elementet inte finns,
      - Skapa <div class="circle">
      - Lägg till den i lådan
      - Sätt top och left till där användaren hade sin muspekare
    - OM elementet finns,
      - Uppdatera bara top och left till där användaren hade sin muspekare

  Nu märker ni förmodligen något underligt, cirkeln hamnar helt fel. Detta är
  för vi vill ha muspekarens position I RELATION till den blåa lådan, då
  fungerar inte ".clientX" och ".clientY". Det finns dock en enkel lösning, om
  vi vill ha muspekarens position i relation till ett element skriver vi
  istället ".offsetX" och ".offsetY".
  
  Del 2
  =====

  Ni märker eventuellt snabbt att när vi klickar på den röda cirkeln så hamnar
  den högst upp i vänstra hörnet av den blåa lådan. Detta, återigen, beror på
  att våra event bubblar upp. Nu kan vi ju dock enkelt lösa detta.

  (Om ni inte har detta problem - bra jobbat!)

  Gör så att när användaren klickar på cirkeln så avbryter ni att någoting
  bubblar upp (lägg till lyssnaren när ni skapar cirkeln).

*/

let box = document.querySelector("#box");

box.addEventListener("click", placeDot);

function placeDot (event) {
  
  // client specifierar hella ruttan / webläsar fönstret
  // offset specifierar ett vilket element du har 
  let x = event.offsetX;
  let y = event.offsetY;
  
  let circle;
  
  if (document.querySelector(".circle")) {
    circle = document.querySelector(".circle")
  } else {
    circle = createCircle();
    document.querySelector("#box").appendChild(circle);
  }
  
  let circleHeight = circle.clientHeight;
  let circleWidth = circle.clientWidth;
  circle.style.top = y - circleHeight/2 + "px";
  circle.style.left = x - circleWidth/2 + "px";
  
}

function createCircle () {

  let circle = document.createElement("div");
  circle.className = "circle";
  return circle;
}