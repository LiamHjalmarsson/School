let preUrl = `https://teaching.maumt.se/apis/BBAPI/v1/`

document.querySelector("button").addEventListener("click", sendMsg)

function sendMsg () {
  let sendTo = document.querySelector("#receiver").value; 
  let value = document.querySelector("#content").value

  let req = new Request(preUrl, {
    method: "POST",
    headers: {"content-type": "application/json, charset-utf-8"},
    body: JSON.stringify({
      ...me,
      receiver: sendTo,
      content: value,
    })
  })

  
  fetch(req)
  .then(r => {
    if (r.status !== 200) {
      document.querySelector(".feedback").classList.add("error");
    }
    
    return r.json()
  })
  .then(message)
  
  document.querySelector(".feedback").textContent = "sending..."
  document.querySelector(".feedback").classList.remove("error")

}

function message (r) {
  document.querySelector(".feedback").textContent = r.response_feedback
  console.log(r)

  if (!document.querySelector(".feedback").classList.contains("error")) {
    document.getElementById("receiver").value = "";
    document.getElementById("content").value = "";
    displayMessages()
  }
}


