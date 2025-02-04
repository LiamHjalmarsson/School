document.querySelector("input").addEventListener("keyup", (e) => display_word_info(e))

document.querySelector("#definition").textContent = `Enter a word for its information`

async function display_word_info (e) {
    if (e.key === "Enter") {
        await get_word(e.target.value)
    }
}

async function get_word (word) {

    document.querySelector("#definition").textContent = `Fetching the words information`

    try {
        
        let req = new Request(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let recourse = await (await fetch(req)).json()

        document.querySelector("#definition").textContent = recourse[0].meanings[0].definitions[0].definition 

    } catch (error) {
        
        document.querySelector("#definition").textContent = `Something went wrong WITH THE  ${word} try something else`
    }
}
