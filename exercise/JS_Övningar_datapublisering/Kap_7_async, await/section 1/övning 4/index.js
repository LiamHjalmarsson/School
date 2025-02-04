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


make_all_cards(16, 5);


async function make_all_cards (containers, cards) {
    for ( let i = 0; i < containers; i++) {
        await get_cards(cards)
    }
}

async function get_cards (cards) {
    let container = document.createElement("div")
    document.querySelector("#cards").append(container)

    let numbers = []

    for (let i = 0; i < cards; i++) {
        numbers.push(await get_number())
    }

    numbers.sort((a, b) => a > b).forEach(number => {
        let box = document.createElement("div")
        container.append(box)
        box.textContent = number

    })

}

async function get_number () {
    let req = `https://teaching.maumt.se/apis/random_number/?min=1&max=29&t_min=0&t_len=0.4`

    return await (await fetch(req)).json()
}