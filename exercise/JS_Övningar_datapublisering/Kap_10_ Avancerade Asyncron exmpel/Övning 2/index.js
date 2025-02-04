/*

Vi gör exakt samma sak som vi gjorde i förra övningar men denna
gång ska vi dessutom hålla reda på hur många begäran som varje
div behövde för att till slut få en färg.

*/

go(10, 10); // Argument: n_columns, n_rows


function go (columns, rows) {
    for (let i = 0; i < columns * rows; i++) {
        let div = document.createElement("div");
        document.querySelector("#wrapper").append(div)

        get_color(div)
    }
}

async function get_color (div, number = 1) {

    try {
        
        div.textContent = number
        let req = new Request(("https://teaching.maumt.se/apis/random_color/"))

        let recourse = await (await fetch(req)).json()

        div.style.backgroundColor = recourse

    } catch (error) {

        if (error.message.includes("NetworkError")) {
            number++
            get_color(div, number)
            div.textContent = number

        } else {
            console.log(error)
        }
    }
}

