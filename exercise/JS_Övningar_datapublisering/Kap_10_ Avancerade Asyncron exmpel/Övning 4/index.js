/*

Vi fortsätter.

Nu ska ni, när allting är klart (eller under tiden, som ni föredrar), visa på sidan
hur många begäran vi behövde göra per div, i snitt.

För er som verkligen inte gillar matte: snittet = summan av alla begäran / antalet divar

I denna övningen får ni använda globala variabler men forstfarande samma anrop.

*/


let div_count = 0
let request_count = 0

// Your global variables need to go before the start-up call (go()).
// Otherwise they won't be of any use.
go(10, 10); // Argument: n_columns, n_rows

function go (rows, cols) { 
    for (let i = 0; i < rows * cols; i++) {
        let contaier = document.createElement("div")
        document.querySelector("#wrapper").append(contaier)

        get_color(contaier)
    }
}

async function get_color (contaier, counter = 1) {
    try {
        contaier.textContent = counter
        request_count++

        let req = new Request("https://teaching.maumt.se/apis/random_color/")
        let res = await (await fetch(req)).json()
        div_count++
        contaier.style.backgroundColor = res

        document.querySelector("#average").innerHTML = `
            <div> ${div_count} </div>
            <div> ${request_count} </div>
            <div> ${average_count()} </div>
        `
        document.querySelector("#average").classList.add("visible")
        average_count()

    } catch (error) {
        
        if (error.message.includes("NetworkError")) {
            counter++
            request_count++
            contaier.textContent = counter
            get_color(contaier, counter)
        }
    }
}

function average_count () {
    let number = request_count / div_count
    return number.toFixed(2)
}


// function go (colums, rows) {

//     for (let i = 0; i < colums * rows; i++) {
//         let div = document.createElement("div")
//         document.querySelector("#wrapper").append(div)

//         get_color(div)
//     } 
// }

// async function get_color (div, counter = 1) {

    
//     document.querySelector("#average").classList.add("visible");

//     try {

//         div.textContent = counter
//         number_req()
//         let req = new Request(("https://teaching.maumt.se/apis/random_color/"))
//         let recourse = await(await fetch(req)).json()
//         number_divs()
//         div.style.backgroundColor = recourse

//         average_count()

//     } catch (error) {

//         if (error.message.includes("NetworkError ")) {
//             counter++
//             div.textContent = counter++
//             get_color(div, counter)
//         }

//     }

// }

// function init_average () {

//     document.querySelector(".divs").textContent = 0;
//     document.querySelector(".req").textContent = 0;
//     document.querySelector(".average").textContent = 0;
  
// }

// function number_divs () {
//    let div =  parseInt(document.querySelector(".divs").textContent) + 1;
//    document.querySelector(".divs").textContent = div
// }

// function number_req () {
//     let req =  parseInt(document.querySelector(".req").textContent) + 1;
//     document.querySelector(".req").textContent = req
// }

// function average_count () {
//     let req =  parseInt(document.querySelector(".req").textContent);
//     let div =  parseInt(document.querySelector(".divs").textContent);

//     document.querySelector(".average").textContent = round_number(req/ div) 
// }

// function round_number (number) {
//     return +(Math.round(number + "e+2")  + "e-2");
// }