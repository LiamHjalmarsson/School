
const json_colors = JSON.stringify(["coral", "skyblue", "gold", "hotpink"]);
// https://teaching.maumt.se/apis/random_number/?min=10&max=20
// https://teaching.maumt.se/apis/random_color/


go(2);

function go (amount) {

  make_one_box(0, amount);

}

async function make_one_box (count, amount) {

  if (count === amount) {
    return;
  }

  const size = await (await fetch("https://teaching.maumt.se/apis/random_number/?min=10&max=20")).json();
  const color = await (await fetch("https://teaching.maumt.se/apis/random_color/?colors=" + json_colors)).json();

  const div = document.createElement("div");
  document.querySelector("#wrapper").append(div);

  div.style.backgroundColor = color;
  div.style.flexBasis = size + "vw";
  div.style.height = size + "vw";

  count++;

  make_one_box(count, amount);

}