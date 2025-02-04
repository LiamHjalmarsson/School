// serie
function users_ser() {
    let req = new Request("https://randomuser.me/api/?results=2")

    fetch(req)
        .then(r => r.json())
        .then(r => {

            let result1 = r.results

            fetch(req)
            .then(r => r.json())
            .then(r => {
            
                let result2 = r.results

                let result = result1.concat(result2)

                show_users(result)
            })

        })

}

function show_users (results) {

    let last = results.map(person => person.name.last)

    console.log(last)

}

users_ser()


// par