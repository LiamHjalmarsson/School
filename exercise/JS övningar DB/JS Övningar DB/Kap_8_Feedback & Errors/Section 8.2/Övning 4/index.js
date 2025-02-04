/*

Resursen https://teaching.maumt.se/apis/loose_gun_array/
är en array av CSS-färger. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

Se videon.

*/

(async function display () {
    let req = new Request("https://teaching.maumt.se/apis/loose_gun_array/")

    let response = await fetch(req)
    if (!response.ok) {
        document.body.textContent = "Something went wrong please try again!"
    } else {
        let recourse = await response.json()
        recourse.forEach(color => {
            let div = document.createElement("div")
            div.style.backgroundColor = color
            document.body.append(div)
        });
    }
})

()
