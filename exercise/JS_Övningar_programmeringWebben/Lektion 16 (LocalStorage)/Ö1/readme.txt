Övning 1
========

Eftersom LocalStorage inte har så många metoder kommer ni endast ha en övning i
detta. Denna kommer även att inkludera att ni skapar lite HTML med innehåll (det
är OK att kopiera från någon sida, t.ex. skk.se), men även CSS. Tanken är att ni
ska skapa en enkel sida där användaren via en dropdown[1] kan styra temat
(utseendet) för sidan. Era teman behöver inte vara speciellt avancerade, t.ex.
en annan bakgrundsfärg och en ny förgrundsfärg på all text - så länge det går
att särskilja på dom. Ha minst 3 st teman. Användarens val ska dock sparas i
LocalStorage så att när dom laddar om sidan är samma tema förinställt. Hur ni
löser biten med ett tema är upp till er själva, det kan t.ex. vara att valet i
dropdownen lägger på en ny CSS-klass till <body> och sedan via era selektorer
ändrar ni bakgrundsfärg osv. Det kan också vara att olika CSS-filer laddas in
genom att ni ändrar sökvägen i er <link>[2].

Lycka till!

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

    När det kommer till <select> och event-hanterare är det eventet "change" ni
    vill lyssna på (dvs. när en användare väljer ett nytt val). I er
    event-hanterare (dvs. funktionen) kan ni pröva att logga "this.value" (då
    får ni ut valet från dropdownen).

[2]: Tänk på att <link> elementet är som vilket annat, dvs. vi kan hämta det och
     ändra egenskaper på det, t.ex:

       HTML:
        <link rel="stylesheet" href="styles.css" id="my-css">
       JS:
        let link = document.getElementById("my-css");
        link.href = "din-andra-css-fil.css";