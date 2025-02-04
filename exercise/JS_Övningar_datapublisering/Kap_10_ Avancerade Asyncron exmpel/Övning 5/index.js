/*

Nu ska vi fokusera på bara de divarna som behövde fler än en
begäran för att få sin färg.

Räkna ut hur många begäran i snitt dessa divar behövde för att få
sin färg.

*/


go(10, 10); // Argument: n_columns, n_rows

function go (n_columns, n_rows) {

  const count_divs = n_rows * n_columns;

  for (let i = 0; i < count_divs; i++) {
    const div = document.createElement("div");
    document.getElementById("wrapper").append(div);
    fill_color(div);
  }

}


async function fill_color (div, n = 1) {

  try {

    div.textContent = n;
    const request = new Request("https://teaching.maumt.se/apis/random_color/");
    const color = await ( await fetch(request) ).json();
    div.style.backgroundColor = color;
    if (n === 1) {
      add_done_one();
    } else {
      add_done_more();
    }
  
  } catch (e) {

    if (e.message.includes("NetworkError")) {
      n++;
      div.textContent = n;
      fill_color(div, n);
      add_sent();
    }
    
  }

}

function init_average () {

  document.getElementById("done_divs_one").textContent = 0;
  document.getElementById("done_divs_more").textContent = 0;
  document.getElementById("requests_sent").textContent = 0;
  document.getElementById("average").textContent = "-";

}

function add_done_more () {

  const done_more = parseInt(document.getElementById("done_divs_more").textContent) + 1;
  const done_one = parseInt(document.getElementById("done_divs_one").textContent);
  const sent = parseInt(document.getElementById("requests_sent").textContent);
  
  document.getElementById("done_divs_more").textContent = done_more;
  document.getElementById("average").textContent = round((sent - done_one) / done_more);
  
}

function add_done_one () {

  const done_one = parseInt(document.getElementById("done_divs_one").textContent) + 1;
  
  document.getElementById("done_divs_one").textContent = done_one;
  
}

function add_sent () {

  const sent = parseInt(document.getElementById("requests_sent").textContent) + 1;
  document.getElementById("requests_sent").textContent = sent;

}

function round (number) {
  return Math.round(number * 100)/100;
}