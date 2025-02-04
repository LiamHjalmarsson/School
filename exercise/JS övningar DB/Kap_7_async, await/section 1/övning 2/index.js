/*

Denna resurs har vi sett tidigare. Den ger oss en (random) av 147 färger som har ett CSS-namn:
https://teaching.maumt.se/apis/random_color/?all&bullet
Tack vare &bullet så svarar den lite snabbare också :-).

Som i en tidigare övning ska du se till att sidan fylls med 100 (10x10) färglådor
i olika färger. Flera lådor kan ha samma färg.

Övningen ska lösas med hjälp av en funktion som returnerar en resurs (färgen) och
utan att använda någon global variabel.

*/

async function get_color (counter) {

    let req = `https://teaching.maumt.se/apis/random_color/?all&bullet`
    let res = await (await fetch(req)).json()

    create_div(res)

    counter++
    
    if (counter <= 100 ) {
        get_color(counter)
    }

}

function create_div (res) {
    let div = document.createElement("div")
    div.style.backgroundColor = res
    document.querySelector("#wrapper").append(div)
}


get_color(0)