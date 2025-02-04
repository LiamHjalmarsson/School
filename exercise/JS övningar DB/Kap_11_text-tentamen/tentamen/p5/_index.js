// https://teaching.maumt.se/apis/random_number/ 
// https://teaching.maumt.se/apis/random_color/

const json_colors = JSON.stringify(["coral", "skyblue", "gold", "hotpink"]);

console.log(json_colors)

go(4); // X ska kunna bytas mot 1, 2, 3 eller 4.

function go (boxes) {
    make_box(0, boxes)    
}

async function make_box (counter, boxes) {

    counter++
    if (counter <= boxes) {
        let number_size_req = `https://teaching.maumt.se/apis/random_number/?min=10&max=20`;
        let color_req = `https://teaching.maumt.se/apis/random_color/`;
        // let color_req = `https://teaching.maumt.se/apis/random_color/?colors=${json_colors}`;

        let number_size = await (await fetch(number_size_req)).json()
        let color = await (await fetch(color_req)).json()
        
        let div = document.createElement("div")
        document.querySelector("#wrapper").append(div)

        div.style.backgroundColor = color
        div.style.height = `${number_size}vw`
        div.style.flexBasis = `${number_size}vw`

        make_box(counter, boxes)
    }

}


// go(3);


// async function go (n) {

//   for (let i = 1; i <= n; i++) {

//     const color = await get_random_color(["coral", "skyblue", "gold", "hotpink"]);
//     const size = await get_random_size();

//     document.querySelector(`#wrapper > div:nth-child(${i})`).style.backgroundColor = color;
//     document.querySelector(`#wrapper > div:nth-child(${i})`).style.flexBasis = size + "vw";
//     document.querySelector(`#wrapper > div:nth-child(${i})`).style.height = size + "vw";

//   }

// }

// async function get_random_size () {

// const size_request = new Request("https://teaching.maumt.se/apis/random_number/?min=10&max=20");
// return await (await fetch(size_request)).json();

// }

// async function get_random_color (colors) {
  
//   const json_colors = JSON.stringify(colors);
//   const color_request = new Request("https://teaching.maumt.se/apis/random_color/?colors=" + json_colors);
//   return await (await fetch(color_request)).json();

// }

