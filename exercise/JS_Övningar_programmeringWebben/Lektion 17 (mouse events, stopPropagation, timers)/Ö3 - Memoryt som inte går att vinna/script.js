/*
  Övning 3
  ========

  Se videon för slutresultatet. All HTML och CSS är redan färdig.

  Ni har även fått hjälpfunktionen "randomRGB" som returnerar en slumpad färg.
  T.ex. "rgb(15, 88, 150)" eller "rgb(240, 130, 55)".

  Del 1
  =====

  I den första delen ska ni göra så att när en användare klickar på <body> så
  ska en <div class="box"> läggas till. Denna ska positioneras under muspekaren,
  vilket innebär att ni måste hämta användarens musposition (clientX och Y). Se
  även till att när lådan läggs till så är det precis under muspekaren (se
  videon).
  
  Lådan ska även ha en slumpad bakgrundsfärg, där kan ni dra nytta av
  hjälpfunktionen som redan är implementerad.

  Del 2
  =====

  I den andra delen ska ni göra så att när en användare klickar på någon av
  lådorna så läggs klassen "circle" till. Detta kommer göra den till en cirkel
  (baserat på den CSS som redan finns). Ni ska även slumpa fram en ny
  bakgrundsfärg.

  Här kommer ni förmodligen stöta på ett problem, när användaren klickar på
  lådan så dyker ytterligare en låda upp. Detta beror på att <body> även lyssnar
  på click-eventet. Så, när en användare klickar på en låda måste ni avbryta
  detta på något vis.

  Del 3
  =====

  Gör så att en användare INTE kan klicka flera gånger på en cirkel så att
  färgen byts (bara första gången). Detta kan ni enkelt göra genom att
  kontrollera om klassen "circle" redan finns på elementet.

  För att kontrollera om ett element har en klass finns följande metod:

    myElement.classList.contains("circle")  <-- Detta ger oss true eller false

*/

let body = document.body;

body.addEventListener("click", placeBox);

function placeBox (event) {
  let y = event.clientY;
  let x = event.clientX;

  let box = createBox();

  body.append(box);

  let height = box.clientHeight;
  let width = box.clientWidth;

  box.style.top = y - (height/2) + "px";
  box.style.left = x - (width/2) + "px";
}

function createBox () {
  let div = document.createElement("div");
  div.classList.add("box");

  div.style.backgroundColor = randomRGB();

  div.addEventListener("click", circle);

  return div
}

function circle (event) {
  event.stopPropagation();

  let box = event.target

  if(!box.classList.contains("circle")) {
    box.classList.add("circle");
    box.style.backgroundColor = randomRGB()
  } else {
    box.classList.remove("circle");
  }
}
 

// Returnerar en slumpad färg i RGB (t.ex. "rgb(18, 201, 157)")
function randomRGB() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
