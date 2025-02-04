/*
  Övning 2
  ========

  Se videon för slutresultatet. All HTML och CSS är redan färdig.

  Del 1
  =====

  I den första delen ska ni helt enkelt göra så att muspositionen skrivs ut i
  paragrafen med id "info". Detta innebär att ni måste lyssna på eventet
  "mousemove" på <body>.

  Del 2
  =====

  I den andra delen ska ni göra så att OM muspositionen är högst upp i vänstra
  hörnet[1] ska meddelandet "Too close to the edge!" skrivas ut i paragrafen med
  id "warning".

  [1]: Högst upp i vänstra hörnet är det samma som:
    
    - X är mindre än 200 OCH Y är mindre än 200
    
  I alla andra fall ska textrutan vara tom (se video).

*/

let info = document.querySelector("#info");
let warning = document.querySelector("#warning");
let body = document.body;

body.addEventListener("mousemove", updateCords);

function updateCords (event) {
  info.innerHTML = `${event.clientY} ${event.clientX}`

  toCloseWarning(event.clientY, event.clientX)
}

function toCloseWarning (y, x) {
  if (y < 200 && x < 200) {
    warning.innerHTML = "You are to clsoe to the EDGE";
  } else {
    warning.innerHTML = ""
  }
}