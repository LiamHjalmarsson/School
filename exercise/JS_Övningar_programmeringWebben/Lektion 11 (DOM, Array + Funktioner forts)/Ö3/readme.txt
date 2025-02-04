Övning 3
========

I denna övningen ska ni arbeta med ett formulär (jag har förberett HTML och
CSS). Ni ska göra så att när en användare "skickar" formuläret ska innehållet
sparas som ett objekt (samma hundobjekt vi haft på föreläsningar med namn, ras
och ålder) och sedan läggas till i en array (denna finns redan i "main.js").
Efter varje ny hund läggs till så kör vi en console.log på arrayen (så vi ser
att det faktiskt funkar).

Det finns en skärminspelning i samma mapp som detta dokument.

För att göra allt detta kommer ni behöva pröva några nya saker, som vi inte
tidigare gått igenom. Så jag kommer beskriva vad som ska göras stegvis och sedan
är det upp till er att skriva koden.

Gör så här
==========

1. Hämta formulärs-elementet och spara det i en variabel
2. Skapa funktionen "onSubmit" som tar emot 1 parameter med namnet "event"
3. Lägg till en lyssnare (eng. Event Handler) på eventet "submit" och ange att
   det är funktionen "onSubmit" som ska anropas.
4. Det första ni gör i funktionen "onSubmit" är att anropa funktionen
   "preventDefault" på event-objektet: "event.preventDefault()". Detta gör vi
   för att vanligtvis när en användare skickar ett formulär så sker en sk.
   "sidladdning" (man skickas till en ny, eller samma, sida). I detta fallet
   vill vi inte skicka användare någonstans, utan dom ska vara kvar.
5. Nästa steg i funktionen "onSubmit" är nu att hämta respektive värde från de
   olika textfälten vi har (namn, ras och ålder). Så hämta dessa tre och spara
   dom i varsin variabel. Men - vi vill ju inte bara ha elementen (textfälten)
   utan vi vill ha deras värden (dvs. det användaren fyllde i). Detta kommer ni
   åt enligt följande format: document.getElementById(...).value <-- notera ".value".
6. När ni sparat respektive värde i en variabel kan vi skapa vårt hundobjekt,
   precis som i tidigare övningar och föreläsningar. Därefter lägger ni till det
   i arrayen "dogs" och direkt efter kör ni en console.log på den arrayen.
7. Pröva nu allting - om ni gjort rätt ska en ny hund lägga till i arrayen och
   sedan ska den dyka upp i konsollen. Men! det finns ett problem, textfälten töms
   inte efter varje gång vi skickat formuläret. För att återställa formuläret
   varje gång kan ni anropa funktionen "reset" på formulärselementet, dvs. något
   i stil med "formElement.reset()" (beroende på vad er variabel heter). Gör
   detta som sista rad i er funktion "onSubmit".

Avslutningsvis, testa också att ta bort raden med "preventDefault". Vad händer
nu med er array efter varje gång ni skickar formuläret? (Gör detta, jag kommer
fråga om detta på fredag)

Lycka till!
