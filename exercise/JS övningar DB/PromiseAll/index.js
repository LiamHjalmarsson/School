let req = new Request("https://teaching.maumt.se/apis/random_number/");

document.querySelector("button").addEventListener("click", getNumber)

function getNumber () {

    let fetch1 = fetch(req) 
    let fetch2 = fetch(req)

    document.querySelector("#number1").textContent = "..."
    document.querySelector("#number2").textContent = "..."
    document.querySelector("#sum").textContent = "waiting"

    let promises = [fetch1, fetch2]

    // När båda dessa promises är fullfiled tar 
    Promise.all(promises)
    // vi får ett värde av löftet är en array av dessa två värdena -> i detta fall en array av två olika nummer 
        .then(array => {
            // för att konventera arrayen till json innan de kan användas. Där vi använder promise igen för att vi vill konvertera båda responsen till json
            // där vi annänder map för att retunera json från varje response 
            console.log(array)
            return Promise.all(array.map(r => r.json()))
        })
        .then((result) => {
            let div1 = document.querySelector("#number1")
            let div2 = document.querySelector("#number2")

            // console.log(result)
            result.forEach(number => {
                if (div1.textContent === "...") {
                    div1.textContent = number
                } else {
                    div2.textContent = number
                }
            })

            document.querySelector("#sum").textContent = parseInt(div1.textContent) + parseInt(div2.textContent);
        })
}








