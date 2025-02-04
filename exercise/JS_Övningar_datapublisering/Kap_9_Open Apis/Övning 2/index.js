/*

Denna API innehåller ett gäng öppna APIs (dock inte alla gratis):
https://github.com/davemachado/public-api

Lista ut hur man får tag på alla APIs som finns registrerade och
som inte kräver någon form av authenticering.
Lista dem på webbsidan på ett elegant sätt.
Se bilden som exempel.

*/


async function get () {
    let req = new Request("https://api.publicapis.org/entries")

    try {
        
        let response = await fetch(req)

        let recourse = await response.json()
        
        console.log(recourse)
        recourse.entries.filter(enteri => enteri.Auth === "").forEach(enteri => {
            let container = document.createElement("div")
            container.classList.add("entry")

            container.innerHTML = ` <div class="title"><a href="${enteri.Link}">${enteri.API}</a></div>
                <div class="description">${enteri.Description}</div>
                <div class="category">${enteri.Category}</div> 
            `

            document.querySelector("#wrapper").append(container)
        });

    } catch (error) {
        
    }
}

get()