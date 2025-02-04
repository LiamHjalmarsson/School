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

// let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

// function display_card (counter) {

//     fetch(req)
//         .then(r => r.json())
//         .then(r => {
        
//             create_card(r)
//             counter++
        
//             if(counter < 100) {
//                 display_card(counter)
//             }
//         })
// }

// function create_card (r) {
//     let card = document.createElement("div")
//     card.style.backgroundColor = r
//     card.textContent = r

//     document.querySelector("#wrapper").append(card)
// }

// display_card(0)


async function get_divs (counter) {

    counter++ 
    if (counter <= 100) {
        let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

        let recourse = await(await fetch(req)).json()

        let div = document.createElement("div")
        div.style.backgroundColor = recourse

        document.querySelector("#wrapper").append(div)

        get_divs(counter)
    }
}

get_divs(0)
