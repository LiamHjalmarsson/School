/*

Dessa resurser finns:
https://teaching.maumt.se/apis/attractions/?attraction=X
https://teaching.maumt.se/apis/attractions/?city=Y
https://teaching.maumt.se/apis/attractions/?country=Z

Där X måste vara en av följande: Lavapies, Templo_de_Debod, Fontana_di_trevi, Pantheon, Brandenburger_Tor eller Kreuzberg.
Notera underscore i namnen ovan.

Y måste vara någon av följande: Madrid, Rome eller Berlin.

Z måste vara någon av följande: Spain, Italy, Germany

Koda en sida som fungerar som den på videon.


Hur gör man för att fånga eventet "användaren har tryckt på Enter"?
1) Vi anger event-handlers med .addEventListener("event_namnet", funktion)
2) "funktion" är event-handler i detta fall
3) När eventet sker (click, keyup, keydown, etc) så anropas event-handler (funktion)
4) Event-handlern anropas med ett särskilt event-objekt som argument.
5) Vi brukar inte göra något med den så våra event-handlers brukar inte ta emot något argument.
   De brukar se ut så här:
        något_element.addEventListener("keyup", () => { funktionskoden })
   Funktionen som vi i exemplet ovan har angett som event-handler deklareras på plats
   med arrow-format. Som ni ser tar den inte emot något argument.
   Men den anropas med ett argument!
6) Om ni tar emot argumentet kan ni logga det på consolen och studera det.
        något_element.addEventListener("keyup", (event_object) => { console.log(event_object) })
7) Hitta nyckeln "key" i event_object
8) Kolla vad det får för värde när ni trycker på olika tangenter, inklusive Enter-tangenten.
9) Nu kan ni kanske lista ut hur ni kan veta när användaren har tryckt på Enter :-)

Om ni inte lyckas med detta så kan ni skapa en knapp (bredvid input-fältet) där det står 
"SEARCH" och som sätter igång första fetch. Längre ned i denna fil kan ni annars
se hur jag har fixat det.


*/























































document.querySelector("input").addEventListener("keyup", keyup);
function keyup (event) {
  if (event.key === "Enter") {
    // Användaren har tryckt på enter efter att ha skrivit namnet på sevärdheten.
    // Här ska det hända grejer
  }
}