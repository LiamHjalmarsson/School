Övning 2
========

I denna övningen ska ni fortsätta arbeta med samma exempeldata som i övning 1
(den är redan placerad i "main.js" åt er). Ni ska skapa ett gäng olika
for-loopar som skriver ut diverse egenskaper från dessa användare.

I dessa utskrifter ska ni använda sk. "Template Literals", som kort innebär att
vi kan stoppa in variabler i en sträng - så här:

    let namn = "Sebbe";
    console.log(`This is my name: ${name}`);

Notera att för att kunna skriva ut variabler i en sträng krävs två saker:

1. Strängen skrivs med ``, dvs. "backticks" (säg "bakåt-länges-apostrofer")
2. Du måste placera din variabel inom ${dinVariabel}.

Ännu ett exempel:

    let person = { firstname: "Jane", lastname: "Doe" };
    console.log(`This is my full name: ${person.firstname} ${person.lastname}`);

Baserat på ovanstående ska ni skapa for-loopar som skriver ut sakerna i listan
nedan (gör en ny loop för varje utskrift). Varje utskrift ska ske med en
console.log som nyttjar "Template Literals".

LISTAN
======

1. Skriv ut alla personers titel, för- och efternman
2. Skriv ut alla personers adress (gatunamn och nummer)
3. Skriv ut alla användares användarnamn och lösenord i form av:
    "Username: X, Password: Y" där ni ersätter X och Y med deras användarnamn och lösenord
4. Skriv ut alla personers email som bor i Danmark (detta kräver en if-sats)
5. Skriv ut namnet på det land alla personer bor i vars titel (Mr, Miss, osv.)
   antingen är "Miss" eller "Mr" (detta kräver en if-sats, och kan lösas med eller
   utan en logisk operator) 
6. Skriv ut alla personers förnamn om deras efternamn börjar med bokstaven "B"
   (detta kräver en if-sats, nedan finns ett exempel på hur vi kan "hämta" första
   bokstaven av en sträng)


Hämta första bokstaven/tecknet från en sträng:

    let name = "Sebbe";
    let firstLetter = name[0];  // En sträng kan ses som en array av bokstäver faktiskt!
    console.log(firstLetter);

Lycka till!