/*

Resursen https://teaching.maumt.se/apis/loose_gun/
är en CSS-färg. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

*/

async function get () {
    let req = new Request("https://teaching.maumt.se/apis/loose_gun/")

    let response = await fetch(req)

    if (response.ok) {
        let res = await response.json()

        document.body.style.backgroundColor = res
    } else {
        document.body.style.backgroundColor = "white"
        document.body.textContent = "something went wrong"
    }
}

get()