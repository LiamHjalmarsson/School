/*

Denna resurs ger oss en random färg:
https://teaching.maumt.se/apis/random_color/?all&bullet

Denna resurs ger oss en array med alla färger som man kan få med resursen ovan
https://teaching.maumt.se/apis/random_color/?all&list

Det vore såklart enkelt att bara loopa igenom arrayen vi får och visa alla
färger som finns i den. Men det är inte särskilt lärorikt.

Det intressanta här är att försöka lista ut ett sätt att få alla färger 
genom att fetcha första resursen så många gånger som det behövs.

Eftersom det är 147 färger så har jag skapat en grid på 21 rader och 7 kolumner.

*/

function list () {

    let listReq = new Request("https://teaching.maumt.se/apis/random_color/?all&list")
    
    fetch(listReq)
        .then(r => r.json())
        .then(r => {
    
            getColor(r, 1)
    
        })
}


function getColor (r, attempts) {
    
    let array_colors = r
    // console.log(array_colors)

    let randomReq = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

    fetch(randomReq)
        .then(r => r.json())
        .then(r => {
            let colorIndex = array_colors.indexOf(r)
            // console.log(colorIndex)

            if (colorIndex !== -1) {
                let div = document.createElement("div")
                div.style.backgroundColor = r
                div.textContent = `${array_colors.length} ${r} ${attempts}`
                array_colors.splice(colorIndex, 1);
                attempts = 0
                document.getElementById("wrapper").append(div)
            } 
            
            if (array_colors.length > 0) {
                attempts++
                getColor(array_colors, attempts)
            }
        })
}

list()

// async function list_Colors () {
//     return await ( await fetch ("https://teaching.maumt.se/apis/random_color/?all&list")).json()
// }

// async function random_color () {
//     return await ( await fetch ("https://teaching.maumt.se/apis/random_color/?all&bullet")).json()
// }

// async function get_colors () {
//     let list = await list_Colors()
//     get_colors_list(list, 1)
// }

// async function get_colors_list (list, attempt) {
//     let colors = list

//     let random = await random_color()

//     let index = colors.indexOf(random)

//     if (index !== -1) {
//         let div = document.createElement("div")
//         div.style.backgroundColor = random
//         div.textContent = `${colors.length} ${random} ${attempt}`
//         colors.splice(index, 1)
//         attempt = 0
//         document.querySelector("#wrapper").append(div)
//     }

//     if (colors.length > 0) {
//         attempt++
//         get_colors_list(colors, attempt)
//     }
// }

// get_colors()