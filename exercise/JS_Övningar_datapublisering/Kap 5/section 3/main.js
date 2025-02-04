let req = (`https://teaching.maumt.se/apis/users/`); 

let me = {
    firstName: "Petter",
    lastName: "Johnsson",
    born: 2010,
}

document.querySelector(".showAll").addEventListener("click", showAll) 

function showAll () {

    let getReq = new Request(req)
    fetch(getReq)
    .then(r => r.json())
    .then(r => {
            console.log(r)
        })
}
    
document.querySelector(".addUser").addEventListener("click", addUser)

function addUser () {
    let postReq = new Request(req, {
        method: "POST",
        headers: {"content-type": "application/json, charset-utf-8"},
        body: JSON.stringify(me)
    })
    
    fetch(postReq)
    .then(r => r.json())
    .then(r => console.log(r))
}

document.querySelector(".changeBtn").addEventListener("click", changeUser)

function changeUser () {
    let valueId = parseInt(document.querySelector(".change").value)

    let changeReq = new Request(req, {
        method: "PATCH",
        headers: {"content-type": "application/json, charset-utf-8"},
        body: JSON.stringify({
            id: valueId,
            firstName: "Jimi"
        })
    })

    fetch(changeReq)
    .then(r => r.json())
    .then(r => console.log(r))

}

document.querySelector(".deleteBtn").addEventListener("click", changeUser)

function changeUser () {
    let valueId = parseInt(document.querySelector(".delete").value)

    let changeReq = new Request(req, {
        method: "DELETE",
        headers: {"content-type": "application/json, charset-utf-8"},
        body: JSON.stringify({
            id: valueId,
        })
    })

    fetch(changeReq)
    .then(r => r.json())
    .then(r => console.log(r))

}



