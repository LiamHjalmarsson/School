/*

Vi blandar två möjliga fel som kan hända:
- Att det är fel på nätverket (simulerad med get_request)
- Att vi har skrivit fel i begäran (simulerad med resursen loose_gun)

Du ska använda get_requesst när du skickar begäran och något av dessa
alternativ kommer att hända:
1) Du får NetworkError
2) Du får en response med status.ok = false
3) Allt går bra och du får en array av färger som du använder som 
   argument i ett anrop till funktionen do_effect().
   Försök att förstå do_effect, det finns inget nytt i den :-).


Se videon.

Du måste använda then.

*/


function get_request () {
  const URL1 = "https://teaching.maumt.se/apis/loose_gun_array/";
  const URL2 = "alsödjkfhasöjdkfh";
  const coin = Math.random() > .25; // true 75% av gångerna och false 25% av gångerna.
  if (coin) {
    return URL1;
  } else {
    return URL2;
  }
}

function do_effect (colors, index = 0) {

  const body_dom = document.querySelector("body");

  const transition_duration = 500;
  body_dom.style.transitionDuration = transition_duration + "ms";
  body_dom.style.backgroundColor = colors[index];
  body_dom.innerHTML = "Lattjo lajbans!"

  index++;
  if (index < colors.length) {
    setTimeout(() => {do_effect(colors, index)}, transition_duration);     
  }
  

}

document.querySelector("body").addEventListener("click", get)

function get () {

  document.querySelector("body").style.backgroundColor = "white";  
  document.querySelector("body").innerHTML = "Trying hard to get to the server...";

  let rep = get_request()

  fetch(rep)
    .then(r => {
      if (r.ok) {
        return r.json()
      } else {
        message(r.statusText)
        return -1
      }
    })
    .then(r => {
      if (r !== -1) {
        do_effect(r)
      }
    })
    .catch(e => {
      message()
    })

}

function message (r) {
  let body = document.querySelector("body")

  if (r) {
    body.textContent = `Sorry! The server is saying that we have an Error (${r}).Please try again in a moment.`;
  } else {
    body.textContent = "Sorry about this!<br>Something seems to be wrong with the connection.<br>Please try again in a moment.";
  }
}

