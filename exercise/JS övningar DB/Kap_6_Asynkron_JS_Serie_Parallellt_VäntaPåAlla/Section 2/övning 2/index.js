/*

Minns du resursen nedan?
https://randomuser.me/api/?results=20

Skapa ett program som först hämtar en random siffra (X) från 
https://teaching.maumt.se/apis/random_number/

och sedan hämtar exakt X users från randomuser.me

*/


fetch("https://teaching.maumt.se/apis/random_number/")
    .then(r => r.text())
    .then(r => {
        let req = new Request(`https://randomuser.me/api/?results=${r}`)

        fetch(req)
            .then(r => r.json())
            .then(r => {
                r.results.forEach(person => {
                    let div = document.createElement("div")
                    div.textContent = person.name.first
                    document.getElementById("wrapper").append(div)
      
                });
            })
    })