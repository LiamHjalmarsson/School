let me = {
    un: "jet_heat",
    pw: "NWX"
}

function displayMessages () {

    fetch(`${preUrl}?un=${me.un}&pw=${me.pw}&receiver=${me.un}`)
        .then(r => r.json())
        .then(r => {
            getMessages(r, "recived")
        })

    fetch(`${preUrl}?un=${me.un}&pw=${me.pw}&sender=${me.un}`)
        .then(r => r.json())
        .then(r => {
            getMessages(r, "sended")
        })
}

function getMessages (r, id) {
    let box = document.querySelector(`#${id} > .msgBox`); 
    box.innerHTML = ""

    r.messages.sort((a, b) => a.timestamp < b.timestamp).forEach(message => {
        let div = document.createElement("div")
        div.classList.add("box")
        box.append(div);
        messageInfo(message, div)
    });

    if (r.messages.length === 0) {
        let from = id === "recived" ? "to" : "from";
        box.innerHTML = `No messages ${from} you.`;
    }
    
}

function messageInfo (r, div) {

    div.id = r.message_id
    div.dataset.message = JSON.stringify(r.message_id)

    div.innerHTML = `
            <div class="message"> <p> ${r.timestamp} </p> <p>From: ${r.sender}</p> <p> To: ${r.receiver}</p> <button class="delete"> Remove </button> </div>
            <div class="msg"> <p> ${r.content} </p> </div>
    `

    div.querySelector("button").addEventListener("click", () => {
        remove(r, div)
    })
}

displayMessages()

