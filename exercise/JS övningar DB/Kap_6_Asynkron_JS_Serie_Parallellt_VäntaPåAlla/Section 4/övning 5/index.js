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

function get_list() {
    let req = new Request("https://teaching.maumt.se/apis/random_color/?all&list")

    fetch(req)
        .then(r => r.json())
        .then(r => {
            get_color(r, 1)
        })
}

function get_color (list, attempts) {

    let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

    fetch(req)
        .then(r => r.json())
        .then(r => {
            let index = list.indexOf(r)

            if (index !== -1) {
                list.splice(index, 1)
                create_color(r, list.length, attempts)
                attempts = 0
            }

            if(list.length) {
                attempts++
                get_color(list, attempts)
            }
        })
}

function create_color (color, length, attempts) {
    let div = document.createElement("div");
    div.style.backgroundColor = color;
    div.textContent = `${length} ${color} ${attempts}`;
  
    document.getElementById("wrapper").appendChild(div);
  }
  

get_list()