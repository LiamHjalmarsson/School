Övning 2
========

I denna övningen ska vi skapa en funktion som ger oss lite användarinteraktion.
Övningen kommer utgå från den inbyggda funktionen "prompt". Den kan ni läsa mer
om här: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

För att snabbt förstå hur den funkar - öppna konsollen och skriv:

>> prompt("Text som syns i fönstret");

Notera vad som händer OCH vad ni fick tillbaka.

Som ni förhoppningsvis såg så skickar denna funktionen tillbaka det som
användare fyller i textfältet. Detta kan vi nyttja när vi skapar nya hundar till
vår databas.

För att ta ett kort exempel innan ni börjar kan vi ju givetvis spara undan saker
och ting i en variabel.

    let firstname = prompt("What is you first name?");
    let lastname = prompt("What is your last name?");
    console.log(`You enter the name: ${firstname} ${lastname}`);

Funktionen: "createNewDogFromPrompt"
====================================
- Parametrar: inga
- Returnerar en hund
    - Som är ett objekt med egenskaperna { name, breed, age } (samma som på föreläsningen)
- Förslag till texterna för respektive "prompt"
    - "Enter the name of the dog"
    - "Enter the breed of the dog"
    - "Enter the age of the dog"
- Tips: när ni "hämtat" värdena från "prompt" så kan ni ju (valfritt) använda
  funktionen "createNewDog" från föreläsningen för att skicka tillbaka hundobjektet.

Ni hittar en skärminspelning som visar hur detta ser ut i samma mapp som denna
filen.

Det fortsätter
==============

Som ni ser så blir åldern inte en siffra, det blir ju en sträng. Som jag nämnt
så är det så att alla textfält (med betoning på text) skickar tillbaka..., text!

Ni får på något vis korrigera funktionen så att just åldern blir en siffra. Ni
hittar en skärmdump på det korrekta resultatet i samma mapp som denna filen.

Lycka till!
