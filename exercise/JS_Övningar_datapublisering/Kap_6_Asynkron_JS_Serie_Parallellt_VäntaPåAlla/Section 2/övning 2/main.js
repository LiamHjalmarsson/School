/*

Minns du resursen nedan?
https://randomuser.me/api/?results=20

Skapa ett program som först hämtar en random siffra (X) från 
https://teaching.maumt.se/apis/random_number/

och sedan hämtar exakt X users från randomuser.me

*/


let req = new Request("https://teaching.maumt.se/apis/random_number/")

fetch(req)
    .then(r => r.json())
    .then(r => {
        let req = new Request(`https://randomuser.me/api/?results=${r}`)

        fetch(req)
            .then(r => r.json())
            .then(r => {
                r.results.forEach(person => {
                    console.log(person)
                    let div = document.createElement("div")
                    div.innerHTML = `${person.name.first} ${person.name.last} ${person.dob.age}`
                    document.querySelector("#wrapper").append(div)
                });
            })
    })