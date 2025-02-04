/*

Här finns all info om hur API:n fungerar:
https://api.artic.edu/docs/#introduction

Det tar en liten stund att förstå hur man får tag på bilderna men allt står i avsnitten:
- Quickstart (hur ska URL:et skrivas. GET-parameters page och limit)
- Images (hur får man tag på webbadressen till bilderna)


Denna server accepterar åtminstone 18 stycken requests parallellt, så ni måste 
hämta alla 18 bilder parallellt.

*/


document.querySelector("button").addEventListener("click", new_Page)

function new_Page () {
    let page = parseInt(document.querySelector("#page_number").textContent)
    if (!page) page = 0

    get_work(page + 1)
}



async function get_work (page) {
    document.querySelectorAll("#wrapper > .image").forEach(img => img.remove())

    document.querySelector("#feedback").textContent = "Getting work"
    document.querySelector("#page_number").textContent = "--"


    let limit = 18

    let req = new Request(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`)

    let work_res = await (await fetch(req)).json()

    console.log(work_res)
    work_res.data.forEach(work => {
        let id_img = work.image_id

        let div = document.createElement("div")
        div.classList.add("image")
        div.style.backgroundImage = `url(https://www.artic.edu/iiif/2/${id_img}/full/843,/0/default.jpg)`

        document.querySelector("#wrapper").insertBefore(div, document.querySelector("footer"))

        limit--

        if (limit === 0) {
            document.getElementById("feedback").textContent = "Idle";
            document.getElementById("page_number").textContent = page;
            document.querySelector("button").removeAttribute("disable");
        }
    })
}