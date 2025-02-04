/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

*/

let rows = 2;
let colums = 2;

let wrapper = document.getElementById("wrapper")
wrapper.style.gridTemplateRows = `repeat(${rows}, 1fr)`
wrapper.style.gridTemplateColumns = `repeat(${colums}, 1fr)`

document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll(`#wrapper > div`).forEach(element => element.remove())

    color_boxes()
})

function get_random_spot (array) {
    let index = Math.floor(array.length * Math.random())

    let element = array[index]

    array.splice(index, 1)

    return element
}

function color_boxes () {
    let freespot = []

    for ( let i = 0; i < (rows * colums); i++) {
        
        if (i === (rows * colums - 1) / 2) {
            continue;
        } else {
            freespot.push(i)
        }
    }

    get_colors(0, freespot)
}

function create_color_box (r, spots) {
    let box = document.createElement("div")
    box.style.backgroundColor = r
    wrapper.append(box)

    // Get a free spot for this color and remove it from the array
    let spot = get_random_spot(spots)

    // Place color_div on its spot
    let row = Math.floor(spot / colums) + 1
    let column = spot % colums + 1

    box.style.gridArea = `${row} / ${column}`

    // Return updated array of free spots
    return spots
}
  

function get_colors (counter, spots) {
    let req = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet")

    fetch(req)
        .then(r => r.json())
        .then(r => {

            counter++ 

            spots = create_color_box(r, spots)

            if (counter < (rows * colums) - 1) {
                get_colors(counter, spots)
            }

            if (counter === (rows * colums)) {
                document.querySelector("button").textContent = "New try"
            }
        })
}

