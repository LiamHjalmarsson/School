document.querySelector("input").addEventListener("keyup", (e) => musician (e))
document.querySelector("#information").textContent = `Enter a musician`

function musician (e) {
    if (e.key === "Enter") {
        get_musician(e.target.value)
    }
}

function get_musician (value) {
    let instrument = new Request(`https://teaching.maumt.se/apis/musiker/?musician=${value}&instruments`)
    let song = new Request(`https://teaching.maumt.se/apis/musiker/?musician=${value}&songs`)

    document.querySelector("#information").textContent = "Fetching the musician from the DB..."
    
    fetch(instrument)
        .then(r => r.json())
        .then(r => {
            show_information(r)
        })

    fetch(song)
        .then(r => r.json())
        .then(r => {
            show_information(r)
        })

        let instruments = false
        let songs = false

        function show_information (r) {

            // r.instruments ? instruments = r.instruments: false;

            // r.songs ? songs = r.songs: false;

            // if (songs && instruments) {
            //     document.querySelector("#information").textContent = `${r.musician} plays the ${instruments[0]} and has recorded the song "${songs[0]}"`; 
            // }

            if (r.instruments) {
                instruments = r.instruments;
            }

            if (r.songs) {
                songs = r.songs;
            }

            if (songs && instruments) {
                console.log(songs)
                document.querySelector("#information").textContent = `${r.musician} plays the ${instruments[0]} and has recorded the song "${songs[0]}"`; 
            }
        
        }
}


// function get_musician_info (event) {
//   if (event.key === "Enter") {

//     document.querySelector("#information").textContent = "Fetching information from DB...";

//     const request_instruments = new Request(`https://teaching.maumt.se/apis/musiker/?musician=${event.target.value}&instruments`);
//     const request_songs = new Request(`https://teaching.maumt.se/apis/musiker/?musician=${event.target.value}&songs`);

//     let instruments = false;
//     let songs = false;

//     // Fetcha båda parallellt, det går snabbare.
//     fetch(request_instruments).then(r => r.json()).then(show_info);
//     fetch(request_songs).then(r => r.json()).then(show_info);
//     function show_info(resource) {
//       if (resource.instruments) {
//         instruments = resource.instruments;
//       }
//       if (resource.songs) {
//         songs = resource.songs;
//       }
//       if (songs && instruments) {
//         document.querySelector("#information").textContent = `
//           ${resource.musician} plays the ${instruments[0]} and has recorded the song "${songs[0]}"
//         `;  
//       }
//     }
//   }
// }
