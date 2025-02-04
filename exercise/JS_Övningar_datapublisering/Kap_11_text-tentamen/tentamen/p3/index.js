document.querySelector("input").addEventListener("keyup", keyup);

function keyup (event) {
  if (event.key === "Enter") {
    get_musician(document.querySelector("input").value);
    // get_musician(event.target.value);
  }
}

// function get_musician (musician) {

//   let instrument, song;

//   fetch(`https://teaching.maumt.se/apis/musiker/?musician=${musician}&instruments`)
//   .then( r => r.json() )
//   .then(resource => {

//     if (song) {
//       visa_info(song, resource.instruments[0], musician);
//     } else {
//       instrument = resource.instruments[0];
//     }

//   });

//   fetch(`https://teaching.maumt.se/apis/musiker/?musician=${musician}&songs`)
//     .then( r => r.json() )
//     .then(resource => {

//       if (instrument) {
//         visa_info(resource.songs[0], instrument, musician);
//       } else {
//         song = resource.songs[0];
//       }  
      
//     });

// }

// function visa_info (song, instrument, musician) {
//   document.querySelector("#information").textContent = `${musician} plays ${instrument} and has recorded ${song}`;    
// }


function get_musician (musician) {

  fetch(`https://teaching.maumt.se/apis/musiker/?musician=${musician}&songs`)
  .then( r => r.json() )
  .then(resource => {

    let songs = resource.songs

    fetch(`https://teaching.maumt.se/apis/musiker/?musician=${musician}&instruments`)
    .then( r => r.json() )
    .then(resource => {

      document.querySelector("#information").textContent = `${musician} plays ${resource.instruments[0]} and has recorded ${songs}`;    

    });
    
  });
  
}
