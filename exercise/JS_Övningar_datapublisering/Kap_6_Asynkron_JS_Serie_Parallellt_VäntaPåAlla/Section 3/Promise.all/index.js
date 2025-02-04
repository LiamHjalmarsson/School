
/*

I lösningen till förra övningen använde jag en global variabel för att kontrollera
om båda siffrorna hade kommit in (variabeln numbers_received)

Lös samma problem men utan att använda en variabel som finns "utanför" funktionerna.
Det går inte att lösa detta genom att skicka argument mellan dem eller genom att skapa
nya funktioner som tar emot andra argument, etc. Ni kommer att upptäcka att ni alltid
till slut behöver en någonting (som en variabel) som ligger utanför funktionerna där ni
kan lagra ett värde som informerar om hur många siffror ni har fått in.

Så frågan är vad annars (som ligger utanför funktionerna) man skulle kunna använda för
att kontrollera att båda siffrorna har kommit in.
window.localStorage skulle kunna vara ett sånt ställe där ni kan lagra data. Men det känns 
som overkill. Det finns något annat på sidan som kan berätta om siffrorna har kommit in...
vad skulle det kunna vara?

Om du inte kommer på det så finns svaret längre ner på sidan.

*/

let req = new Request("https://teaching.maumt.se/apis/random_number/");

document.querySelector("button").addEventListener("click", getNumber)

function getNumber () {

    let fetch1 = fetch(req) 
    let fetch2 = fetch(req)

    document.querySelector("#number1").textContent = "..."
    document.querySelector("#number2").textContent = "..."
    document.querySelector("#sum").textContent = "waiting"

    Promise.all([fetch1, fetch2])
        .then(v => {
            return Promise.all(v.map(r => r.json()))
        })
        .then(([fetch1, fetch2]) => {
            let div1 = document.querySelector("#number1").textContent = fetch1
            let div2 = document.querySelector("#number2").textContent = fetch2
            document.querySelector("#sum").textContent = div1 + div2
        })
}



























/*

Vi kan använda innehållet i divvarna #number1 och #number2 för att veta om båda siffrorna har kommit in.
Om innehållet i båda divvarna är något annat än "..." (vi sätter den text-content när vi börjar fetcha)
så har båda divvarna fylls med en siffra och vi är redo för summan.

*/