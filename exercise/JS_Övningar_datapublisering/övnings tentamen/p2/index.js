document.querySelector("input").value = "";
document.querySelector("#definition").textContent = "Enter word above";

async function defination (value) {
    let req = new Request(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)

    return await (await fetch(req)).json()
}

async function get_defination (e) {

    if (e.key === "Enter") {
        document.querySelector("#definition").textContent = "Getting definition from DB...";

        let value = document.querySelector("input").value
        let info = await defination(value)
        document.querySelector("#definition").textContent = info[0].meanings[0].definitions[0].definition
    }
}

document.querySelector("input").addEventListener("keyup", (e) => get_defination(e))

// document.querySelector("input").value = "";
// document.querySelector("#definition").textContent = "Enter word above";

// document.querySelector("input").addEventListener("keyup", search_word);

// async function search_word (event) {
//   if (event.key === "Enter") {

//     document.querySelector("#definition").textContent = "Getting definition from DB...";

//     const word_object = await (await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + event.target.value)).json();
//     document.querySelector("#definition").textContent = word_object[0].meanings[0].definitions[0].definition;
//   }
// }