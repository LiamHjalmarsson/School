
/*

Samma resurs som i förra övningen:
https://teaching.maumt.se/apis/random_color/?all&bullet

Eftersom det ska finnas en knapp mitt i så kan det inte vara en 10x10 grid.
Kör istället med en 11x11 grid.

*/

function cards () {

    for (let i = 0; i < 5; i++) {
        let card = document.createElement("div")
        card.classList.add("colorDiv")
        
        document.querySelector("#wrapper").append(card)
    
        card.addEventListener("click", () => color_Card(card))
    }

    document.querySelectorAll("#wrapper > div").forEach(color_Card)
}

function color_Card (card) {
    let req = new Request("https://teaching.maumt.se/apis/random_color/")

    card.classList.add("reciving")

    fetch(req)
        .then(r => r.json())
        .then(r => {
            card.style.backgroundColor = r

            card.classList.remove("reciving")
        })
}

cards()
