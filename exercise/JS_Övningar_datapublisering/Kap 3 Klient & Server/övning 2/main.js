
/*

I denna övning anväder vi oss av en av webbresurserna som visades i videon.
Webbresursen är en random siffra mellan 1 och 99.

Övningen går ut på att skriva siffrorna från 1 till siffran som vi frå från webbresursen på sidan,
som övningens video visar.

*/

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
  .then(r => r.text())
  .then(countup);


function countup (resource) {

  console.log(resource)
  for (let i = 0; i < resource; i++) {
    let div = document.createElement("div")
    div.textContent = i + 1;
    document.body.append(div)
  }
}

