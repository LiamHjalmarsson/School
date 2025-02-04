/*

Vi fortsätter.

Nu ska ni, när allting är klart (eller under tiden, som ni föredrar), visa på sidan
hur många begäran vi behövde göra per div, i snitt.

För er som verkligen inte gillar matte: snittet = summan av alla begäran / antalet divar

I denna övningen får ni använda globala variabler men forstfarande samma anrop.

*/


// Your global variables need to go before the start-up call (go()).
// Otherwise they won't be of any use.

let amount_Requests = 0
let amount_Colors = 0

go(10, 10); // Argument: n_columns, n_rows

function go (colums, rows) {

    for ( let i = 0; i < colums * rows; i++) {
        let div = document.createElement("div")
        document.querySelector("#wrapper").append(div)

        get_color(div)
    }
}

async function get_color (div, counter = 1) {

    
    try {
        
        amount_Requests++
        div.textContent = counter
        
        let req = new Request("https://teaching.maumt.se/apis/random_color/")
        let recourse = await(await fetch(req)).json()

        amount_Colors++
        div.style.backgroundColor = recourse

        if (amount_Colors === 100) {
            document.querySelector("#average").textContent = `${amount_Requests / 100} is the average request per div`
            document.querySelector("#average").classList.add("visible")
        }
        
    } catch (error) {   
        if (error.message.includes("NetworkError ")) {
            counter++
            div.textContent = counter
            get_color(div, counter)
        }
    }

}