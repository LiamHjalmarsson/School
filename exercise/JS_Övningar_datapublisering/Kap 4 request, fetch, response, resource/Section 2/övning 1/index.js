
/*

Ändra argumentet till fecth-funktionen så att det blir en förfrågan (request) istället för en sträng.
Vi är dock intresserade av att hämta samma webbresurs. 

 */

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
.then(r => r.text())
.then(countup);


function countup (resource) {
for (let i = 0; i < resource; i++) {
  document.querySelector("body > div").innerHTML += `<div>${i}</div>`;
}
}

