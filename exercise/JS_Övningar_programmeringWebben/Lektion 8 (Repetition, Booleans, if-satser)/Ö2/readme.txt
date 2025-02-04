Övning 2
========

(Jag har skapat en HTML+JS fil så ni snabbt kommer igång)

I denna övning ska ni skapa två funktioner. Den första ska ta emot en siffra
(poäng) och ge skicka tillbaka vilket betyg poängen ger, i form av en bokstav (A
till F). Den andra funktionen ska ta emot en boktav (betyg, A - F) och ge
tillbaka oss vilka poäng som ger detta betyg. Nedan finner ni beskrivningar över
respektive funktion.

Funktion 1: "grade"
===================

- Parametrar: "points" (siffra)
- Returnerar en sträng (dvs. betyget A till F)
    - Vilket innebär att det ska inte finnas någon console.log i funktionen, MEN
    det är klart tillåtet att använda sig av console.log vid testning. Tänk bara
    på att ta bort det när ni är färdiga.
- Betygskriterier (det som ni bygger er if-sats utifrån)
    A: 26-30 poäng (dvs. allt över 25)
    B: 20-25 poäng
    C: 15-20 poäng
    D: 10-15 poäng
    E: 5-10 poäng
    F: 0-5 poäng

Exempelanrop i konsollen (som ni manuellt skriver in i konsollen):
grade(4);   // Detta ska ge oss (returnera) "F"
grade(12);  // Detta ska ge oss (returnera) "D"
grade(27);  // Detta ska ge oss (returnera) "A"

Funktion 2: "gradeLabel"
========================

- Parametrar: "grade" (sträng)
- Returnerar en sträng som representerar poängen för betyget
    - Utgå från betygskriterierna i funktion 1
    - T.ex. "D" är "10-15", "E" är "5-10"

Exempelanrop i konsollen (som ni manuellt skriver in i konsollen):
gradeLabel("A");    // Detta ska ge oss (returnera) "26-30"
gradeLabel("D");    // Detta ska ge oss (returnera) "10-15"
gradeLabel("E");    // Detta ska ge oss (returnera) "5-10"

Lycka till!