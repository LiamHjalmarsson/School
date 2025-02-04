document.querySelector("input").addEventListener("keyup", (e) => display_word_info(e))

document.querySelector("#definition").textContent = `Enter a word for its information`

function display_word_info (e) {
    if (e.key === "Enter") {
        get_word(e.target.value)
    }
}

function get_word (word) {

    document.querySelector("#definition").textContent = `Fetching the words information`

    let req = new Request(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
   
    fetch(req)
        .then(r => r.json())
        .then(r => {
            document.querySelector("#definition").textContent = r[0].meanings[0].definitions[0].definition 
            document.querySelector("#definition").classList.remove("not_found")
        })
        .catch(e => {
            document.querySelector("#definition").classList.add("not_found")
            document.querySelector("#definition").textContent = `Word ${word} not founded in DB try something else`
        })
}

// // alternativ 2 
// document.querySelector("input").value = "";
// document.querySelector("#definition").textContent = "Enter word above";

// document.querySelector("input").addEventListener("keyup", search_word);

// function search_word (event) {
//   if (event.key === "Enter") {

//     document.querySelector("#definition").textContent = "Getting definition from DB...";
//     document.querySelector("#definition").classList.remove("not_found");

//     const request = new Request("https://api.dictionaryapi.dev/api/v2/entries/en/" + event.target.value);
//     fetch(request)
//       .then(response => {

//         if (response.status === 404) {
          
//           document.querySelector("#definition").textContent = `Word "${event.target.value}" not found in DB.`;
//           document.querySelector("#definition").classList.add("not_found");
//           return false;

//         } else {

//           return response.json();

//         }

//       })
//       .then(show_info);
//   }
// }

// function show_info(resource) {
//   if (resource) {
//     document.querySelector("#definition").textContent = resource[0].meanings[0].definitions[0].definition;
//   }
// }