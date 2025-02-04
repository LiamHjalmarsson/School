Övning 2
========

I denna övning ska ni arbeta med arraymetoderna "filter" och "map". Ni ska
bearbeta arrayer på ett eller annat vis. I vissa frågor räcker det t.ex. bara
med "filter" och andra behöver ni använda båda.

-- Det är INTE tillåtet att använda for-loopar i detta fallet --      ... det är ju en labb i arraymetoder

I "main.js" finner ni en del frågor med färdiga arrayer att utgå från. Placera
era svar var efter varje fråga. Ni får själva välja om ni vill spara svaret i en
variabel eller bara skriva ut det (console.log) direkt.

Tips: tänk på att man kan skriva "filter" och "map" efter varandra:

    // Nedan så filterar vi ut siffran 5 (endast den) sedan gångar vi den med 2,
    // vilket ger oss slutresultatet i form av arrayen: [10]
    let numbers = [1, 2, 3, 4, 5];
    // Det går även att separera dom på varsin rad om så önskas 
    numbers
        .filter((number) => number == 5)
        .map((number) => number * 2)

Lycka till!