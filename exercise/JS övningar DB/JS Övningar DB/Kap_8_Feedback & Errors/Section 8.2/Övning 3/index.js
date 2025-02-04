/*

Resursen https://teaching.maumt.se/apis/loose_gun/
är en CSS-färg. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

*/

let req = new Request("https://teaching.maumt.se/apis/loose_gun/")


function colors (counter) {
    fetch(req)
    .then(r => {
        if (r.ok) {
            return r.json()
        }  else {
            document.body.textContent = "Something went wrong try again!"
            return -1
        }
    })
    .then(r => {
        console.log(r)
        if (r !== -1) {

            counter++ 
            let div = document.createElement("div")
            div.style.backgroundColor = r
            document.body.append(div)

            if (counter < 3) {
                colors(counter)
            }
        }
    })
}

colors(0)