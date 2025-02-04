/*

För att simulera att det kan bli fel i uppkopplingen (NetworkError) så
ska ni använda funktionen get_request och skriva er fetch så här:

fetch(get_request);

Ni ska använda async i detta fall, så någonstans i koden ska det stå:
const response = await fetch(get_request);

*/

function get_request () {
  const URL1 = "https://teaching.maumt.se/apis/random_color/";
  const URL2 = "alsödjkfhasöjdkfh";
  const coin = Math.random() > .5; // true 50% av gångerna och false 50% av gångerna.
  if (coin) {
    return URL1;
  } else {
    return URL2;
  }
}


document.querySelector("button").addEventListener("click", get)

function get () {

  let req = get_request()

  fetch(req)
    .then(r => r.json())
    .then(r => {
      document.body.style.backgroundColor = r
      document.querySelector(".feedback").textContent = r
    })
    .catch(e => {
      document.querySelector(".feedback").textContent = `ITs a problem here try again`
      document.body.style.backgroundColor = "white"
    }) 
}