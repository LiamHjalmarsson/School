Övning 1
========

I denna övning kommer ni utgå från en färdig HTML-fil (denna får ni inte
redigera) och en JS-fil (main.js) som innehåller en array av användare (ni får
inte redigera arrayen). Ni ska lägga till kod i "main.js" som gör följande (det
finns även en skärminspelning i samma mapp som denna filen):

- När en användare klickar på knappen "Log me!" ska ni logga ut ett
  användar-objekt från arrayen "users". Däremot är det bara den användare vars
  för- och efternamn som står inom respektive <div class="user"> som ska logga ut
  (deras objekt dvs.).
- För att hitta rätt användare (så ni bara loggar ut en) så har jag lagt till
  respektive användares ID på <div class="user" id="Användarens ID">. Varje
  användares ID (i arrayen) är sparad under "id.value" (kolla i arrayen och
  sedan jämför mot HTML:en så ser ni).

  Det vill säga:

        <div class="user" id="xyz">
            ...
            <button>
               |----- När dom klickar på denna knappen hämtar ni
                      ID:et "xyz" ovan, och hämtar den användare
                      vars "id.value" är detsamma som "xyz" från
                      arrayen "users".

Som sagt, ta en titt på videon så är det lättare att förstå.

Lycka till!