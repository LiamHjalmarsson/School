
/*

Nedan ser du en bit kod. Den innehåller samma instruktioner som på videon fast en annan webbresurs.

1)
Det första du ska göra är att lista ut vad denna webbresurs är.
Gör det genom att skriva resurserns URL på webbläsarens adressfält och kolla på vad som visas där.

2)
Förhoppningsvis har du listat ut att det handlar om en array av siffror.
Antalet siffror är random (1- 10)
Siffrorna själva är också random (0-99)

3)
När funktionen do_this anropas kommer arrayen med siffror (webbresursen) att vara argumentet.
Arrayen läggs i variabeln "resource".

4A)
Övningen A går ut på att logga alla siffror på consolen.
Just nu loggas alla på en gång (hela arrayen) men i övnignen ska de loggas en och en.

4B)
Övningen B går ut på att skriva ut siffrorna på webbsidan, som videon visar.

*/


fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/numbers.php")
  .then(r => r.json())
  .then(do_this);


function do_this (resource) {
  console.log(resource);
}

