/*

Resursen https://teaching.maumt.se/apis/loose_gun_array/
är en array av CSS-färger. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

Se videon.

*/

async function get () {

    let req = new Request("https://teaching.maumt.se/apis/loose_gun_array/")

    let response = await fetch(req)

    if (response.ok) {
        
        let res = await response.json()

        res.forEach(element => {
            let div = document.createElement("div")
            div.style.backgroundColor = element
            document.body.append(div)
        });
    }

    else {
        document.querySelector("body").textContent = "Aj då... testa igen!";
    }
}

get()