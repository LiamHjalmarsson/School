"use strict";

/*
Ni kan om ni vill öva på att skapa HTML- och CSS-filerna.
Annars kan ni använda de som finns i solution-mappen.
*/


/*
Detta, och alla andra, problem ska lösas i ordningen som beskrivs nedan.
Det är viktigt att ni börjar alltid skriva koden i en viss ordning.
Inte för att det är den absolut bästa ordningen i alla situationer utan för att det 
är viktigt att internalisera ett visst sätt att lösa kodningsproblem.
Det hjälper att alltid skriva kod i samma ordning.
Längre fram i kursen kan ni välja en egen ordning.
*/



/*
STEG 1
- Deklarera globala variabler. Om möjligt initialisera dem.

Vi skiljer mellan globala och lokala variabler.
Lokala variabler är de som deklareras innanför måsvingar. De kallas
lokala för att de kan bara "nås" (eller användas) innanför måsvingarna där de har
deklarerats.
Vi använder måsvingar i många olika situationer, exvis när vi skriver
while- eller for-loopar. Eller, inte minst, när vi deklarerar en funktion.

Det första ni ska göra i era program är att deklarera alla globala variabler
som kommer att behövas i koden. Det är bra om ni från början har tänkt igenom
vilka globala variabler ni behöver, men det är lätt hänt att man i efterhan 
kommer på att man behöver flera, eller att man kan ta bort några. Det är helt ok.

Om det går, ska ni även initialisera de globala variablerna. Man "initialiserar"
en variabel när man assignar den sitt initiala värde.
*/

// 1) Declare and initialize (if possible) global variables
let buttonHotpink = document.querySelector("#hotpink");
let buttonChartreuse = document.querySelector("#chartreuse");
let container = document.querySelector("#container");




/*
STEG 2
- Assignera eventuella Event-listeners för existerande HTML-element

(alltså använd addEventListener för att assigna en funktion till ett event)
Vi kan bara göra detta för de HTML-element som finns från början i HTML-filen.
Andra element, som vi skapar från JS, har ju ännu inte hunnit skapats.

I en del övningar kommer vi inte att ha några HTML-element från början,
då finns det inget att göra i steg 2.

Om JS-skapade HTML-element ska ha eventListeners så assignas dem gärna KORT EFTER det 
att de har skapats.
*/

// 2) Assign the event listeners for the existing HTML-elements
buttonHotpink.addEventListener("click", function () {
  box("hotPink")
})

buttonChartreuse.addEventListener("click", function () {
  box("chartreuse")
})




/*
STEG 3
- Skriv all "direkt-kod" som behövs

Med "direkt-kod" menar jag koden som ska utföras direkt när sidan laddats upp.
Ibland har vi ingen sådan kod, utan alla våra olika kommandon, funktioner, etc
körs bara efter att vissa events sker.

Det är fallet i denna övning. Vi behöver ingen direkt-kod.

OBS:  Det skulle vara rätt att säga att STEG 1 och 2 är direkt-kod. Men det hjälper
      att skilja dessa två steg från resten av direkt-koden.

*/

// 3) Direct code



/*
STEG 4
- Deklarera alla funktioner som behövs

Va? Kan man deklarera en funktion efter det att man har använt (anropat) den?
Ja... om man deklarerar den så här:
function f1 () {}

Om man istället "deklarerar" den så här:
let f1 = function () {}
så kan man INTE anropa den innan man "deklarerar" den.
(Det heter inte "deklarera" när man gör så här)


ALLTSÅ:
Exempel 1 (FUNKAR FINT!)
let v1 = f1( 3 );
function f1 ( p ) {
  return p + 1;
}

Exempel 2 (Error!)
let v2 = f2( 3 );
let f2 = function ( p ) {
  return p + 1;
}
Vi får: Uncaught ReferenceError: can't access lexical declaration 'f2' before initialization


Så... jag sa fel i lektionen. Vi är redan nu intresserade av skillnaden mellan
en "function declaration" (Exempel 1) och en "function expression" (Exempel 2).

Detalj för nyfikna: Detta med att en funktion kan anropas i koden innan den är deklarerad kallas
"function hoisting".

*/

// 4) Function declarations
function box (color) {
  let div = document.createElement("div");
  div.style.backgroundColor = color;

  container.append(div)
}
