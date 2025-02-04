Övning 4
========

I denna övningen ska ni redigera funktionen "addDogToDatabaseFromPrompt" från
övning 3. I detta fallet ska vi ge användaren möjlighet att avbryta sitt tillägg
av en ny hund till databsen. Detta kommer ske genom den inbyggda funktionen
"confirm" som presenterar användaren med en text (t.ex. "Är du säker?") och om
dom trycker "Cancel" så får vi "false" tillbaka och om dom trycker "OK" får vi
"true". Detta innebär att vi kan göra en enkel if-sats som styr om den hund dom
precis skapat ska läggas till eller inte. Här kan ni läsa mer om funktionen
"confirm": https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

För att ta ett kort exempel kan ni pröva exemplet nedan.

    let isSure = confirm("Are you sure?");

    if (isSure) {
        console.log("You are sure!");
    } else {
        console.log("Nevermind.");
    }

I samma mapp som denna filen hittar ni en skärminspelning som visar processen
tydligare. Det är sedan upp till er att redigera funktionen
"addDogToDatabaseFromPrompt" så att den _inte_ lägger till hunden i databasen om
dom väljer "Cancel".

Meddelanden (texten till "confirm") kan vara i följande format:

"Are you sure you want to add: <namn>, <hundras>, <ålder>?"