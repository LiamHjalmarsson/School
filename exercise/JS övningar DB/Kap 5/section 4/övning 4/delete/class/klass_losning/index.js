
// DIRECT CODE

// Get my messages as sender and show them.
get_my_messages("sender");
get_my_messages("receiver");

document.querySelector("#send_form button").addEventListener("click", event_post_message);

function event_post_message () {

  const receiver = document.querySelector('input[name="receiver"]').value;
  const content = document.querySelector('input[name="content"]').value;
  post_message (receiver, content);

}



// FUNCTION DECLARATIONS

function get_my_messages (which) {

  const request_sender = new Request(`https://teaching.maumt.se/apis/BBAPI/v1/?un=jet_heat&pw=NWX&${which}`);

  fetch(request_sender)
    .then(r => r.json())
    .then(resource => {
      const messages = resource.messages.sort((a,b) => {
        if (a.timestamp < b.timestamp) {
          return 1;
        } else {
          return -1;
        }
      });

      document.querySelector(`#${which} > ul`).innerHTML = "";
      messages.forEach(message => {
        const div = document.createElement("div");
        div.classList.add("message");
        document.querySelector(`#${which} > ul`).append(div);
        div.innerHTML = `
          <div class="sender">${message.sender}</div>
          <div class="receiver">${message.receiver}</div>
          <div class="timestamp">${message.timestamp}</div>
          <div class="content">${message.content}</div>
          <button>REMOVE</button>
        `;

        div.querySelector("button").addEventListener("click", event_delete_message);

        function event_delete_message () {
          delete_message(message.message_id);
        }

      });

    });
  
}

function post_message (receiver, content) {

  const request_post = new Request("https://teaching.maumt.se/apis/BBAPI/v1/", {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      un: "jet_heat",
      pw: "NWX",
      receiver: receiver,
      content: content
    }),
  });

  fetch(request_post)
    // .then (r => r.json())
    .then(response => {
      console.log(response);
      if (response.status === 404) {
        console.log("User not found");
      }
      return response.json();
    })
    .then(resource => {
      if (resource.response_feedback === "OK") {
        get_my_messages("sender");
      }
    });

}

function delete_message (message_id) {

  const request_delete = new Request("https://teaching.maumt.se/apis/BBAPI/v1/", {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      un: "jet_heat",
      pw: "NWX",
      message_id: message_id,
    }),
  });

  fetch(request_delete)
    .then(r => r.json())
    .then(resource => {

      if (resource.sender === "jet_heat") {
        get_my_messages("sender");
      } else {
        get_my_messages("receiver");
      }
    });

}
