/*

Använd denna resurs för att hämta varje färg:
https://teaching.maumt.se/apis/random_color/


De fyra färgerna i varje grupp hämtas parallelt.
Varje grupp hämtas efter att den förra är på plats (serie).

*/

const color_score = {
  hotpink: 8,
  gold: 7,
  skyblue: 6,
  lightseagreen: 5,
  coral: 4,
  orange: 3,
  limegreen: 2,
  cadetblue: 1
};


function display ( ) {
  // tom array där vi pushar in färgerna vi får från url 
  let colors = []

  // loppar fyra gånger för att hämta fyra färger och lägga till i arrayen
  for (let i = 0; i < 4; i++) {

    fetch("https://teaching.maumt.se/apis/random_color/")
      .then(r => r.json())
      .then( r => {
        colors.push(r)
      
        // if sats om att arrayens längd har längden 4 så kallar vi på funktionen get_box
        if (colors.length === 4) {
          get_box(colors)
        }
      })
  }

}

// get_box skappar container för varje box 
function get_box (colors) {
  let box = document.createElement("div")
  box.classList.add("box")
  document.querySelector("#wrapper").append(box)

  // funktion där vi loppar igenom colors arrayn och skapr divar med färgerna och appenar till box
  get_cards(colors, box)
  
  // funktion där vi lägger ihpå hur mycket alla poäng är värda 
  get_points(colors, box)

  // if sats om .box length är mindre en fyra så kallar vi på display funktionen igen för att köra koden igen 
  if (document.querySelectorAll(".box").length < 4) {
    display()
  }
}

function get_cards (colors, box) {
  colors.forEach(color => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.style.backgroundColor = color
    box.append(card)
  });
}

function get_points (colors, box) {
  let points = 0;

  // loppar igenom våran colors array för att ta ut varje färg där vi lägger det i color_scor för att komma åt rätt färg nyckel med poäng 
  colors.forEach(color => points += color_score[color])

  let point = document.createElement("div")
  point.textContent = points
  point.classList.add("points")
  box.append(point)
}

display()