/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

*/

let rows = 11
let colums = 11 

document.querySelector("#wrapper").style.gridTemplateColumns = `repeat(${colums}, 1fr)`
document.querySelector("#wrapper").style.gridTemplateRows = `repeat(${rows}, 1fr)`

document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll("#wrapper > div").forEach(div => div.remove())

    fill_divs()
})

function fill_divs () {

    let free_spot = []

    for (let i = 0; i < rows * colums; i++) {

        if (i === ((rows * colums) - 1 ) / 2) {
            continue;
        }

        free_spot.push(i)
    }

    get_color (0, free_spot)

}

function get_color (counter, free_spot) {
    let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

    fetch(req) 
        .then(r => r.json())
        .then(r => {
            free_spot = create_color(r, free_spot)

            counter++

            if (counter < rows * colums - 1) {
                get_color(counter, free_spot)
            } else {
                document.getElementById("button_start").textContent = "NEW";
            }
        })
}

function create_color(color, free_spot) {
    let div = document.createElement("div")
    div.style.backgroundColor = color
    div.classList.add("color")

    document.querySelector("#wrapper").append(div)

    let spot = get_random_spot(free_spot)

    let row = Math.floor(spot / colums) + 1
    let column = spot % colums + 1
    div.style.gridArea = `${row} / ${column}`;

    return free_spot
}

function get_random_spot (free_spot) {
    let index = Math.floor(free_spot.length * Math.random())

    let element = free_spot[index]

    free_spot.splice(index, 1)

    return element
}