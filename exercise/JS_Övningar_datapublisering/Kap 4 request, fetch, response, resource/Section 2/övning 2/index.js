
/*

Någonting fungerar inte här. Fixa koden så den fungerar.

*/

const rqst = new request("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php");


fetch(Request)
.then(r => r.text())
.then(countup);


function countup (resource) {
  for (let i = 0; i < resource; i++) {
    document.querySelector("body > div").innerHTML += `<div>${i}</div>`;
  }
}

