/*

Som bekant kan vi få NetworkError om vi skickar för många begäran på en gång.
I denna övning ska vi bygga en sida som inte klappar ihop om detta händer.

Ni ska koda en sida som fyller fönstret med 100 (10x10) stycken divar.
För varje div ska vi hämta en random color (parallellt!) från vår kära resurs:
https://teaching.maumt.se/apis/random_color/


När nätverket bråkar och ger oss NetworkError för en av divarna så ska ni se till
att "catcha" error och automatiskt skicka en ny begäran så att ni kan fylla
diven med färgen som ni, förr eller senare, får som resurs.

Det hela ska starta med anropet nedan.

*/


go(10, 10); // Argument: n_columns, n_rows

function go (colums, rows) {

    for (let i = 0; i < rows * colums; i++) {
        let div = document.createElement("div")
        document.querySelector("#wrapper").append(div)
        get_color(div)
    }

}
  
async function get_color (div) {

    
    try {

        let req = new Request("https://teaching.maumt.se/apis/random_color/")
        let response = await(fetch(req))
        let recourse = await response.json()
        div.style.backgroundColor = recourse

    } catch (error) {
            
        if(error.message.includes("NetworkError")) {
            get_color(div);
        } else {
            console.log(error)
        }
    }
        
}

