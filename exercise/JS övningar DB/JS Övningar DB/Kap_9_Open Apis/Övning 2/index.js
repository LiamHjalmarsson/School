/*

Denna API innehåller ett gäng öppna APIs (dock inte alla gratis):
https://github.com/davemachado/public-api

Lista ut hur man får tag på alla APIs som finns registrerade och
som inte kräver någon form av authenticering.
Lista dem på webbsidan på ett elegant sätt.
Se bilden som exempel.

*/

async function apis () {
    let req = ("https://api.publicapis.org/entries")

    let recourse = await (await fetch(req)).json()

    let free_Api = recourse.entries.filter(keys => keys.Auth === "")

    free_Api.forEach(api => {
        show_info(api)
    });
}

function show_info (api) {
    let div = document.createElement("div");
    document.getElementById("wrapper").append(div);
    div.classList.add("entry");
    div.innerHTML = `
      <div class="title"><a href="${api.Link}">${api.API}</a></div>
      <div class="description">${api.Description}</div>
      <div class="category">${api.Category}</div>
    `;
}

apis()
  
