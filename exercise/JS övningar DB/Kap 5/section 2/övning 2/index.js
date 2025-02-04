
/*

Webbresursen https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=X
är ett random ord (ganska få ord att välja mellan) av typen X, där X kan vara:
  adjektiv. Då får man ett ord som: "fina", "sura", etc.
  adverb. Då får man ett ord som: "fort", "säkert", etc
  omstandighet. Då får man ett ord som: "på gatan", "hemma", etc.
  pronom. Då får man ett ord som: "de", "mina", "dina", etc.
  substantiv. Då får man ett ord som: "hundar", "katter", etc
  verb. Då får man ett ord som: "gick", "vandrade", etc

Resursen är av typen "text".

*/

function showdiv1 (a) { document.querySelector("#showdiv1").textContent = a; }
function getdiv1 (a) { return document.querySelector("#showdiv1").textContent; }

/*
    1)  När användaren klickar på knappen "Ny Sats" ska du, med hjälp av webbresurserna ovan
        skriva en sats i showdiv1. Satsen ska alltid bestå av:
        substantiv + verb + adverb
        i den ordningen.

        Du får endast interagera med showdiv1 via funktionerna showdiv1 och getdiv1 ovan.
        Du måste fixa CSS själv.
*/

document.querySelector("button").addEventListener("click", sats)

function sats () {

  let sub = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv")
  
  fetch(sub)
  .then(r => r.text())
  .then(r => {
    showdiv1(r)
    
    let verb = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb")

    fetch(verb)
      .then(r => r.text())
      .then(r => {
        showdiv1(`${getdiv1()}, ${r}`)

        let adverb = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adverb")

        fetch(adverb)
          .then(r => r.text())
          .then(r => {
            showdiv1(`${getdiv1()}, ${r}`)
          })
      })
      
    })
}