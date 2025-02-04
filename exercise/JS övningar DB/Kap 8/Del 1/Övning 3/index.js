/*

Resursen https://teaching.maumt.se/apis/loose_gun_array/
är en array av CSS-färger. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

Se videon.

*/


function get () {
    let req = new Request("https://teaching.maumt.se/apis/loose_gun_array/")

    fetch(req)
        .then(r => {
            if (r.ok) {
                console
                return r.json()
            }
            else {
                document.querySelector("body").textContent= "something went wrong"
                return -1
            }
        })
        .then(r => {
            if (r !== -1) {
                r.forEach(color => {
                    let div = document.createElement("div")
                    div.style.backgroundColor = color
                    document.body.append(div)
                });
            }
        })
}

get()