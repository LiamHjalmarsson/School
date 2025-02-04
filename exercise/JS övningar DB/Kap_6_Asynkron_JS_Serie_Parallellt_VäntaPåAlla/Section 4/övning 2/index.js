
/*

Samma resurs som i förra övningen:
https://teaching.maumt.se/apis/random_color/?all&bullet

Eftersom det ska finnas en knapp mitt i så kan det inte vara en 10x10 grid.
Kör istället med en 11x11 grid.

*/

let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

function display_card (counter) {

    fetch(req)
        .then(r => r.json())
        .then(r => {
        
            document.querySelector("button").setAttribute("disabled", false)
            create_card(r)
            counter++
        
            if(counter < 120) {
                display_card(counter)
            }

            if (counter === 120) {
                document.querySelector("button").textContent = "New Try"
                document.querySelector("button").removeAttribute("disabled")
            }

        })
}

function create_card (r) {
    let card = document.createElement("div")
    card.style.backgroundColor = r
    card.textContent = r

    document.querySelector("#wrapper").append(card)
}

document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll("#wrapper > div").forEach(element => element.remove())

    display_card(0)
})