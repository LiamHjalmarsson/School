
/*

  Vi kommer i denna övning att jobba mot tre resurser:
  A)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=X&country=Y
      är ett (random) djur från databasen som är av typen X och finns i landet Y.
  B)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=X
      är ett (random) djur från databasen som är av typen X och finns i något land (vilket som helst).
  C)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?country=Y
      är ett (random) djur från databasen som finns i landet Y och är av någon typ (vilken som helst).


  Denna version (v1) av resursen har endast ett fåtal djur.
  Den har bara djur av typen Insect, Mammal och Fish.
  Den har bara djur från Sweden, Spain och Kenya.

  Den har bara två/tre djur av varje kombination (tre Mammals från Spain, två Insects från Sverige, etc).

  Resursen är ett json-objekt. Studera hur det är strukturerat genom att skicka
  en giltig förfrågan från webbläsarens adressfält.

*/


/*
    1)
    
    Det finns redan en div #user_input med två input-fält.
    När användaren klickar på "FETCH ANIMAL" ska koden skicka en förfrågan där argumenten är
    tagna från input-fälten. Ett för country och ett för kind.
    Namnet på djuret vi får från servern ska visas i showdiv1.

    I denna övning bryr vi oss inte om länder eller typer som inte finns.
    Vi utgår från att användaren anger ett giltigt land och en giltig typ (OBS versalen i början!)
    
*/


document.querySelector("button").addEventListener("click", animalSearch)

function animalSearch () {

    let valueC = document.querySelector(`.country`).value
    let valueK = document.querySelector(`.kind`).value

    let req = new Request (`https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=${valueK}&country=${valueC}`)


    fetch(req)
        .then(r => r.json())
        .then(r => document.querySelector("#showdiv1").textContent = r.animal.name)

}