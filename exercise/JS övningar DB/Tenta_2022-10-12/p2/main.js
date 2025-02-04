function display_user_then () {
    let req = new Request("https://randomuser.me/api/?results=10")

    fetch(req)
        .then(r => r.json())
        .then(r => {

            let germany = r.results.filter(preson => preson.location.country === "Germany")
            
            if (germany.length > 0) {
                germany.forEach(person => {
                    console.log(person.name.first)
                });
            } else {
                console.log("No users in Germany")
            }  
             
        })
}

display_user_then()


async function display_user_await () {
    let req = new Request("https://randomuser.me/api/?results=10")

    let res = await(await fetch(req)).json()

    let germany = res.results.filter(preson => preson.location.country === "Germany")
            
    if (germany.length > 0) {
        germany.forEach(person => {
            console.log(person.name.first)
        });
    } else {
        console.log("No users in Germany")
    }  

}

display_user_await()