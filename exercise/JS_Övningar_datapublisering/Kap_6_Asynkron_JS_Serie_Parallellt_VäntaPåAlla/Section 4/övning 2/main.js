
/*

Samma resurs som i förra övningen:
https://teaching.maumt.se/apis/random_color/?all&bullet

Eftersom det ska finnas en knapp mitt i så kan det inte vara en 10x10 grid.
Kör istället med en 11x11 grid.

*/

let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet"); 

btnPress()

function btnPress (e) {
    let btnText = document.querySelector("button").textContent
    document.querySelector("#wrapper").innerHTML = `<button id="button_start"> ${btnText} </button>`
    document.querySelector("button").addEventListener("click", btnPress)

    if (e) {
        console.log(e)
        displayColors(0)
    }
}

function displayColors (counter) {
    let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

    fetch(req)
        .then(r => r.json())
        .then(r => {

            createColorDiv(r)

            if (counter++ < 120) {
                displayColors(counter++)
                document.querySelector("button").setAttribute("disabled", true);
            } else {
                document.querySelector("button").textContent = "NEW"
                document.querySelector("button").removeAttribute("disabled");
            }


        })
}

function createColorDiv (r) {
    let div = document.createElement("div")
    div.style.backgroundColor = r
    div.innerHTML = `<div> ${r} </div>`
    document.querySelector("#wrapper").append(div)
}