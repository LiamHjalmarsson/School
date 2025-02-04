
// Exempel på start-anrop
go(3);

// Denna funktion tar emot en array och returnerar en sträng med alla
// element i arrayen separerade med komma.
// Kan användas för att visa songs och instruments.
function show_array (array) {
  return array.join(", ");
}


async function go(names) {
  
  try {
    names++
    let req_musician = new Request(`https://teaching.maumt.se/apis/uncertain_musician/?random=${names}`)

    let response = await fetch(req_musician)

    if (response.statusText === `I'm a teapot`) {

      go(names)

    } else {

      let resource = await response.json()
      get_info(resource)
    }

  } catch (error) {
    console.log(error)
    document.querySelector("#wrapper").textContent = `Problmes with the server. Please reload this page`
  }

} 

async function get_info (res_musician) {

  for (let i = 0; i < res_musician.musician.length; i++) {

    let div = document.createElement("div")
    document.querySelector("#wrapper").append(div)

    let name = res_musician.musician[i]

    let req_instruments = (`https://teaching.maumt.se/apis/uncertain_musician/?musician=${name}&instruments`);
    let req_songs = (`https://teaching.maumt.se/apis/uncertain_musician/?musician=${name}&songs`);
  

    let instrument = await get_instrumetns(req_instruments)
    let songs = await get_songs(req_songs)

    div.innerHTML = `<div> ${name} </div> <div> Songs: ${songs} </div> <div> Instrument: ${instrument} </div>`
  }

}

async function get_instrumetns (req) {
  try {
    let response_ins = await fetch(req)
    if (response_ins.statusText === `I'm a teapot`) {
      return `Sorry could not get this information`
    } else {
      let resource_ins = await response_ins.json()
      return resource_ins.instruments[0]
    }
  } catch (error) {
    return `Sorry could not get this information`
  }
}

async function get_songs (req) {
  try {
    let responnse_song = await fetch(req)
    if (responnse_song.statusText === `I'm a teapot`) {
     return `Sorry could not get this information`   
    } else {
      let resource_song = await responnse_song.json()
      console.log(resource_song)
      return resource_song.songs[0]
    }
  } catch (error) {
    return `Sorry could not get this information`
  }
}
