/*

Detta ger oss random siffror mellan 1 och 29:
https://teaching.maumt.se/apis/random_number/?min=1&max=29&t_min=0&t_len=0.4
(t_min och t_len ger oss snabbare resurser)

Koda en sida som fungerar som den på videon. Krav:
(1) .then får inte förekomma. Det måste alltså lösas med async och await
(2) globala variabler får inte förekomma
(3) siffrorna i brickorna måste komma i stigande ordning
(4) allt ska starta med anropet som finns redan på plats: make_all_cards(16, 5);
    där 16 är antalet kort och 5 antalet siffror i varje kort.


Problemet inkluderar en (förhoppningsvis rimlig) CSS-utmaning.
Om du tycker att den är för svår så:
1) Kolla på lösningen så du kan lösa problemet
2) Boka tid i din kalender för att gå igenom CSS från webb-kursen.
   CSS:en på denna sida bör du kunna klara av utan större problem.

*/


// SAMMA FUNKTIONER SOM I FÖRRA ÖVNINGEN

make_all_cards(16, 5);

async function make_all_cards (n_cards, n_numbers) {
  for (let i = 0; i < n_cards; i++) {
    await make_card(n_numbers);
  }
}

async function get_number () {
  const request = new Request("https://teaching.maumt.se/apis/random_number/?min=1&max=29&t_min=0&t_len=0.4");
  return await (await fetch(request)).json();
}


// FUNKTIONER SOM MÅSTE SKAPAS NYA ELLER ÄNDRAS

// Två möjliga lösningar (av flera):
// 1. Hämta alla siffror i brickan och sen kontrollera om de är alla olika. Om de inte är alla olika, hämta fem nya siffror. Repetera.
// 2. Efter varje siffra vi får, kontrollera om den redan finns i brickan. Om den redan finns, hämta en ny. Repetera.


// Lösning 1 (lösning 2: index_2.js)

async function make_card (n_numbers) {

  const div_card = document.createElement("div");
  document.getElementById("cards").append(div_card);

  let numbers = await get_different_numbers(n_numbers);

  numbers.sort((a,b) => a - b).forEach(n => {
    const div_number = document.createElement("div");
    div_card.append(div_number);
    div_number.textContent = n;
  });

}

async function get_different_numbers (n_numbers) {

  let numbers = [];
  for (let i = 0; i < n_numbers; i++) {
    numbers.push(await get_number());
  }

  // Är alla siffror annorlunda?
  // Vi måste jämföra dem alla sinsemellan och se om två är lika
  for (let i = 0; i < numbers.length; i++) {
    let pivot = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (pivot === numbers[j]) {
        return await get_different_numbers(n_numbers);
      }
    }
  }

  return numbers;

}
