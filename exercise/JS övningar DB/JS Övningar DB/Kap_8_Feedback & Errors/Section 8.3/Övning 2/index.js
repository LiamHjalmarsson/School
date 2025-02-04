/*

För att simulera att det kan bli fel i uppkopplingen (NetworkError) så
ska ni använda funktionen get_request och skriva er fetch så här:

fetch(get_request);

Ni ska använda async i detta fall, så någonstans i koden ska det stå:
const response = await fetch(get_request);

*/

function get_request () {
  const URL1 = "https://teaching.maumt.se/apis/random_color/";
  const URL2 = "alsödjkfhasöjdkfh";
  const coin = Math.random() > .5; // true 50% av gångerna och false 50% av gångerna.
  if (coin) {
    return URL1;
  } else {
    return URL2;
  }
}


async function get_color () {
  
  try {
    let req = get_request()

    let response = await fetch(req)
    let recourse = await response.json()

    document.body.style.backgroundColor = recourse
    document.querySelector(".feedback").textContent = `We got the color ${recourse}`
    
  } catch (error) {
    document.body.style.backgroundColor = "white"
    document.querySelector(".feedback").textContent = `We run in to a problem try again to get a color`
  }
}


document.querySelector("button").addEventListener("click", async () => await get_color())