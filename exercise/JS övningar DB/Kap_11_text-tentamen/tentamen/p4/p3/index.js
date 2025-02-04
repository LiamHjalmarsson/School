document.querySelector("input").addEventListener("keyup", keyup);

async function keyup (event) {
  if (event.key === "Enter") {
    get_musician(document.querySelector("input").value);
    // get_musician(event.target.value);
  }
}

async function get_musician (musician) {

    document.querySelector("#information").textContent =  `Fetching information about musician`

    
    try {
        let song_req = `https://teaching.maumt.se/apis/musiker/?musician=${musician}&songs`
        let instrument_req = `https://teaching.maumt.se/apis/musiker/?musician=${musician}&instruments`
        
        let recourse_songs = await(await fetch(song_req)).json()
        let recourse_req = await(await fetch(instrument_req)).json()

        document.querySelector("#information").classList.remove("not_found")
        document.querySelector("#information").textContent = `The musician ${musician} has made the song ${recourse_songs.songs[0]} and plays the instrument ${recourse_req.instruments[0]}`


    } catch (error) {
        document.querySelector("#information").classList.add("not_found")
        document.querySelector("#information").textContent = `The musician ${musician} is not founded in the DB try some one else!`
    }

    
}
  