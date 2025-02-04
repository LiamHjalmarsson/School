Övning 2
========

I denna övning ska ni öva på att "översätta" vanliga funktioner till sk. "arrow
functions". Tänk på att vi kan skriva en "arrow function" på följande två vis:

    1. Den kortaste varianten, här behöver vi varken måsvingar eller "return".

        let add = (a, b) => a + b;
        let isLargerThen10 = (x) => x > 10;

        add(5, 10);         // => 15
        isLargerThen10(20); // => true

    2. Den lite längre varianten, men här har vi möjlighet att skriva mer.
    
        let addAndPrint = (a, b) => {
            console.log(`Adding ${a} with ${b}`);
            return a + b;
        }

Baserat på dessa varianter gå in i "main.js" och översätt alla funktioner till
dessa "arrow functions". Ni kan ta bort dom befintliga allt eftersom att ni
översätter. Bortse från kommentarer vid översättning.

Lycka till!