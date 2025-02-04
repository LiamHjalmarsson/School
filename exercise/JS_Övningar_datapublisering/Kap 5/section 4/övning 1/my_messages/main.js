let me = {
    un: "jet_heat",
    pw: "NWX"
}

let prefixed = `https://teaching.maumt.se/apis/BBAPI/v1/?un=${me.un}&pw=${me.pw}`

function displayMessages () {

    fetch(`${prefixed}&receiver=${me.un}`)
        .then(r => r.json())
        .then(r => {
            getMessages(r, "recived")
        })

    fetch(`${prefixed}&sender=${me.un}`)
        .then(r => r.json())
        .then(r => {
            getMessages(r, "sended")
        })
}

function getMessages (r, id) {
    let box = document.querySelector(`#${id} > .msgBox`); 
    box.innerHTML = ""

    r.messages.sort((a, b) => a.timestamp > b.timestamp).forEach(message => {
        messageInfo(message, box)
    });

    if (r.messages.length === 0) {
        let from = id === "recived" ? "to" : "from";
        box.innerHTML = `No messages ${from} you.`;
    }
}

function messageInfo (r, box) {
    let div = document.createElement("div")
    div.classList.add("messages")
    div.innerHTML = `<div class="msgInfo"> <p> ${r.timestamp} </p> <p>From: ${r.sender}</p> <p> To: ${r.receiver}</p> </div>
        <div> ${r.content} </div>
    `
    box.append(div) 
}


displayMessages()