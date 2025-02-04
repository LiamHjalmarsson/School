/*

Resursen https://teaching.maumt.se/apis/loose_gun/
är en CSS-färg. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

*/

f1();

async function f1 () {

  let response = await fetch("https://teaching.maumt.se/apis/loose_gun/");

  if (response.ok) {

    let resource = await response.json();
    document.body.style.backgroundColor = resource;

  } else {

    document.body.textContent = "Something went wrong, we're sorry about this. Please try again in a minute.";

  }

}