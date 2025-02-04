/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

*/

let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet"); 

let rows = 13;
let columns = 13;

document.getElementById("wrapper").style.gridTemplateColumns = `repeat(${columns}, 1fr)`
document.getElementById("wrapper").style.gridTemplateRows = `repeat(${rows}, 1fr)` 

document.querySelector("button").addEventListener("click", displayColors);

function displayColors () {
    document.querySelectorAll("#wrapper > div").forEach(div => div.remove())

    let openSpot = []

    for (let i = 0; i < (rows * columns); i++) {
        if (i === ((rows * columns) - 1) / 2) {
            // console.log(i)
            continue;
        }
        openSpot.push(i)
    }

    // console.log(openSpot)
    getColors(0, openSpot)
}

function getColors (counter, openSpot) {

    fetch(req)
        .then(r => r.json())
        .then(r => {

            openSpot = createColor(r, openSpot)

            counter++ 

            if (counter < rows * columns - 1) {
                getColors(counter, openSpot);
                document.querySelector("button").setAttribute("disabled", true)
            } else {
                document.querySelector("button").removeAttribute("disabled")
            }
        })
}

function createColor (r, openSpot) {
    let div = document.createElement("div");
    div.style.backgroundColor = r

    let placeMent = getRandomPlacment(openSpot);

    let row = Math.floor(placeMent / columns) + 1;
    let column = placeMent % columns + 1;

    div.style.gridArea = `${row} / ${column}`;

    document.querySelector("#wrapper").append(div)

    return openSpot
}

function getRandomPlacment (openSpot) {
    let indexOf = Math.floor(openSpot.length * Math.random());
    let element = openSpot[indexOf]

    openSpot.splice(indexOf, 1)

    return element
}