go(6)

async function go(repeat) {

  document.querySelector("#wrapper").style.gridTemplateColumns = `repeat(${repeat}, 1fr)`
  document.querySelector("#wrapper").style.gridTemplateRows = `repeat(${repeat}, 1fr)`

  for (let i = 0; i < repeat * repeat; i++) {
    
    let div = document.createElement("div")
    document.querySelector("#wrapper").append(div)

    await color_div(div)
  }
  
}

async function color_div (div) {

  let json_colors = JSON.stringify(["steelblue", "hotpink", "cadetblue", "gold", "slategray"])

  let color_req = (`https://teaching.maumt.se/apis/random_color/?bullet&colors=${json_colors}`)
  let durantion_req = (`https://teaching.maumt.se/apis/random_number/?bullet&min=0&max=800`)

  let color_res = await (await fetch(color_req)).json()
  let durantion_res = await ( await fetch(durantion_req)).json()

  setTimeout(get_color, 500); 

  function get_color () {
    div.style.backgroundColor = color_res
    div.style.transitionDuration = `${durantion_res}ms`

    if (color_res !== "gold") {
      setTimeout(() => {
        color_div(div)
      },durantion_res)
    }
  }

}

// async function fill_box (div) {

//   const json_colors = JSON.stringify(["skyblue", "lightblue", "cadetblue", "seagreen"]);
//   const color = await ( await fetch("https://teaching.maumt.se/apis/random_color/?bullet&colors=" + json_colors) ).json();
//   const duration = await ( await fetch("https://teaching.maumt.se/apis/random_number/?bullet&min=0&max=800") ).json();

//   setTimeout(fill_it, 10);
//   function fill_it () {
//     div.style.backgroundColor = color;
//     div.style.transitionDuration = duration + "ms";

//     if (color !== "skyblue") {
//       setTimeout(() => { fill_box(div); }, duration);
//     }

//   }

// }

// X ska kunna bytas till en siffra.
// Vid siffror högre än typ 13 kommer koden att ta lång tid att bli klar.
// Vid siffror under 4 kommer koden att bli klar lite för fort.
// Jag rekommenderar att du testar med en siffra mellan 5 och 8.
// Men programmet ska fungera oavsett vilken (rimlig) siffra vi än använder
