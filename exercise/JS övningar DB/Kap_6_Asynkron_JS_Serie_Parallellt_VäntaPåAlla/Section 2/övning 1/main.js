/*

Koda ett program som hämtar resurserna nedan i serie.
Först ska color hämtas och sedan ska number hämtas.
Anävnd page_log (istället för console.log) för att se vad som händer (alltså som på videon)

*/



const random_color_request = new Request("https://teaching.maumt.se/apis/random_color/");
const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");

function page_log (str, kind) {
  // kinds: start, response, resource, fetch.
  document.getElementById("wrapper").innerHTML += `<p class="${kind}">${str}</p>`
}

page_log("START", "start");

fetch(random_color_request)
  .then(r => {
    page_log(`This is the status response ${r.status}`, "response")
    return r.text()
  })
  .then(r => {
    page_log(`This is the color of the response ${r}`, "resource")
    
  fetch(random_number_request)
  .then(r => {
    page_log(`This is the status response ${r.status}`, "response")
    return r.text()
  })
  .then(r => {
    page_log(`This is the number of the response ${r}`, "resource")
  })
  })