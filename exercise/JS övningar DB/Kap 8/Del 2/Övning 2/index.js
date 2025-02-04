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


document.querySelector("button").addEventListener("click", get)

async function get () {
  
  try {
    let rep = get_request()
    
    document.querySelector(".feedback").textContent = `fetching color`
    
    let res = await(await fetch(rep)).json()
    document.body.style.backgroundColor = res
    document.querySelector(".feedback").textContent = res
    
  } catch (error) {
    document.body.style.backgroundColor = "white"
    document.querySelector(".feedback").textContent = `Something went wrong`
    
  }
}