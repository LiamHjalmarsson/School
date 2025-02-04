Övning 1
========

    Kuriosa
    =======
    Vad gör egentligen en for-loop? T.ex. den "nya" varianten där vi på
    föreläsningen hade "for (let dog of dogs) { ... }".
                                    
        --- Datorn översätter från vänster till höger ---

                                    printDog(dogs[0]);
                                    printDog(dogs[1]);
        for (let dog of dogs) {     printDog(dogs[2]);
            printDog(dog);          printDog(dogs[3]);
        }                           printDog(dogs[4]);
                                    printDog(dogs[5]);
                                    ...och så vidare


I denna övning kommer ni utgå från samma "databas" av hundar vi haft på
föreläsningarna (jag har redan placerat dom i main.js). Ni ska skapa en funktiona
som räknar ut medelåldern av hundarna.

> Medelåldern = summan av alla hundars ålder / antal hundar

Funktionen: "getAverageDogAge"
==============================
- Parametrar: "dogs" (arrayen över hundar)
- Returnerar medelåldern för hundarna
- Upplägg
    1. Börja med att räkna ut summan av åldrarna
    2. Räkna sedan ut medelvärdet (se definitionen ovan)
    3. Skicka tillbaka (returnera) medelvärdet

Om ni anropar funktionen (getAverageDogAge) med hundarna från föreläsningen så
ska svaret bli "4.833333333333333".

Exempelanrop i konsollen:
getAverageDogAge(dogs); // => 4.833333333333333

Detta är ju inte väldigt läsbart och vi kan lika bra avrunda det till närmsta
heltal.

Extrauppgift
============

Gör så att funktionen skickar tillbaka ett avrundat tal istället för
"4.833333333333333", dvs. 5. För att avrunda använder ni funktionen
"Math.round()", ni anropar den med siffran ni vill avrunda. Det vill säga:

    let number = 4.6;
    Math.round(number);

Så att samma anrop till "getAverageDogAge" med hundarna från föreläsningen ska
nu skicka tillbaka siffran 5.

OBS! Ni kan inte skriva "return 5;"...

Lycka till!