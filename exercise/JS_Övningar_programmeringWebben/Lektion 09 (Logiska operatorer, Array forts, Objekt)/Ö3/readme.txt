Övning 3
========

I denna övningen ska ni arbeta med en funktion som skapar (och fyller) en array
åt oss. Det är vanligare att en array fylls på i efterhand jämfört med att ha
den fylld från början (fylld = det finns saker i den, tex. siffror).

För att göra detta behöver vi snabbt reda ut några små koncept:

1. En tom array skrivs alltid som []
2. För att lägga till något i en array använder vi oss av ".push(det vi vill lägga till)"

Det vill säga i exemplet nedan börjar vi med en tom array och sedan lägger vi
till två element (siffror i detta fallet):

    let numbers = [];
    numbers.push(1);
    numbers.push(2);
    console.log(numbers); // Skriver ut arrayen [1, 2]

I ovanstående exempel har vi ju "manuellt" skrivit ".push" två gånger. Detta är
OK men när vi ska göra det 10, 20 eller fler gånger är det givetvis enklare med
en for-loop. Samma sak gäller om vi skulle bygga en funktion av det hela, då är
en for-loop också bättre.

Förklaring "element": element är benämningen på vad ni har i arrayen, det vill säga:

    let names = ["Sebbe", "Erik"];
    let numbers = [1, 2, 3];

Här är både "Erik" eller siffran "2" ett sk. element.

Funktionen: "range"
===================
- Parametrar: "start" och "amount"
    - "start" representerar från vilken siffra vår array ska börja (dvs. första elementet)
    - "amount" representerar antalet element vi ska ha i arrayen
        - Det är med "amount" vi får styra vårt villkor i for-loopen
- Returnerar en array av siffror

Exempelanrop som ni manuellt skriver in i konsollen:
range(0, 5);    // Detta ska ge oss (returnera) arrayen [0, 1, 2, 3, 4]
range(1, 5);    // Detta ska ge oss (returnera) arrayen [1, 2, 3, 4, 5]
range(3, 3);    // Detta ska ge oss (returnera) arrayen [3, 4, 5]
range(0, 2);    // Detta ska ge oss (returnera) arrayen [0, 1]
range(5, 10);   // Detta ska ge oss (returnera) arrayen [5, 6, 7, 8, 9]

Lycka till!