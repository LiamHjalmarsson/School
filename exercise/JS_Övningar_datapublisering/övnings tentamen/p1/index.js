

const number_request = new Request("https://teaching.maumt.se/apis/random_number/");

async function get_random_number () {
  return await (await fetch(number_request)).json();
}

async function display_number () {
  document.querySelector("#result").textContent = await get_random_number();
}

display_number()