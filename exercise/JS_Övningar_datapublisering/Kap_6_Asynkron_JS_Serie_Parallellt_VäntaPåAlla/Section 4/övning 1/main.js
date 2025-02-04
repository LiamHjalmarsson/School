/*

Denna resurs ger oss en (random) av 147 färger som har ett CSS-namn:
https://teaching.maumt.se/apis/random_color/?all&bullet
Tack vare &bullet så svarar den lite snabbare också :-).

Som du ser på videon ska du se till att sidan fylls med 100 (10x10) färglådor
i olika färger. Flera lådor kan ha samma färg.

Lös denna övning:
1) Med en global variabel som håller reda på hur många färger du har tagit emot
2) Utan den globala variablen

*/

let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet"); 

// let count = 0;

// function getColors (r) {
//     let div = document.createElement("div")
//     div.classList.add(r)
//     div.textContent = r + " " + count;
//     div.style.backgroundColor = r
//     document.querySelector("#wrapper").append(div)
// }

// function displayColors() {

//     fetch(req)
//         .then(r => r.json())
//         .then(r => {
//             count++
//             getColors(r)
            
//             if (count < 100) {
//                 displayColors(0)
//             }
//         })

// }

// displayColors()

function displayColors(counter) {

    fetch(req)
        .then(r => r.json())
        .then(r => {

            counter++
            getColors(r, counter)
            
            if (counter < 100) {
                displayColors(counter)
            }
        })
}

function getColors (r, count) {
    let div = document.createElement("div")
    div.classList.add(r)
    div.textContent = r + " " + count;
    div.style.backgroundColor = r
    document.querySelector("#wrapper").append(div)
}

displayColors(0)