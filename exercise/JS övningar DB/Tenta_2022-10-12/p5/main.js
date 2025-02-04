let json_colors = JSON.stringify(["steelblue", "hotpink", "cadetblue", "gold", "green"])

let rows = 10
let cols = 10

function divs () {

  for (let i = 0; i < rows * cols; i++) {
    
    let div = document.createElement("div")
    document.getElementById("wrapper").append(div)

    color_div(div)
  }

}

async function color_div (div) {

  try {
    let color_req = (`https://teaching.maumt.se/apis/uncertain_color/?colors=${json_colors}`)

    let response = await fetch(color_req)

    if (response.statusText === `I'm a teapot`) {
      div.style.backgroundColor = "black"
      color_div(div)
    } else {
      let color_res = await response.json()
      div.style.backgroundColor = color_res
    }

  } catch (error) {

    color_div(div)
    
  }
}

divs()