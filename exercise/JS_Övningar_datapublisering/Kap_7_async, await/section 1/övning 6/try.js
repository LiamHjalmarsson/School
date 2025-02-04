
play_bingo(16, 5, 29);

async function play_bingo (n_cards, n_numbers, max_number) {
  await make_all_cards(n_cards, n_numbers, max_number);
  make_control(max_number);
}

function make_control (max_number) {
  for (let i = 1; i <= max_number; i++) {
    const div = document.createElement("div");
    document.getElementById("control").append(div);
    div.classList.add("number");
    div.textContent = i;

    div.addEventListener("click", new_number_out);
    function new_number_out() {

      div.classList.add("out");

      const cards_dom = document.querySelectorAll("#cards > div");
      cards_dom.forEach(card_dom => check_number_in_card(card_dom, i));
      cards_dom.forEach(check_bingo);
    }
  }
}

function check_bingo (card_dom) {
  const n_numbers_in_card = card_dom.querySelectorAll("div").length;
  const n_marked_numbers_in_card = card_dom.querySelectorAll(".marked").length;
  if (n_marked_numbers_in_card === n_numbers_in_card) {
    we_have_bingo(card_dom);
  }
}

function check_number_in_card(card_dom, number_out) {
  const numbers_dom = card_dom.querySelectorAll("div");
  numbers_dom.forEach(check_number);
  function check_number (number_dom) {
    const number_in_card = parseInt(number_dom.textContent);
    if (number_in_card === number_out) {
      number_dom.classList.add("marked");
    }
  }
}

function we_have_bingo (card_dom) {

  // Mark card with bingo
  card_dom.classList.add("bingo");

  // Write "bingo" on card
  const bingo_word_dom = document.createElement("div");
  bingo_word_dom.classList.add("bingo_word");
  bingo_word_dom.textContent = "BINGO!";
  card_dom.append(bingo_word_dom);

  // Change background
  document.querySelector("body").classList.add("bingo");

  // Mark all non-bingos
  document.querySelectorAll(".card:not(.bingo)").forEach(c => c.classList.add("not_bingo"));

  // Deactivate control numbers. No new numbers can be clicked.
  const control_numbers_dom = document.querySelectorAll("#control > div");
  control_numbers_dom.forEach(deactivate);
  function deactivate (control_number_dom) {
    control_number_dom.style.pointerEvents = "none";
    if (!control_number_dom.classList.contains("out")) {
      control_number_dom.classList.add("not_out");
    }
  }
}



async function make_all_cards (n_cards, n_numbers, max_number) {
  for (let i = 0; i < n_cards; i++) {
    await make_card(n_numbers, max_number);
  }
}

async function get_number (max_number) {
  const request = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${max_number}&t_min=0&t_len=0.1`);
  return await (await fetch(request)).json();
}

async function make_card (n_numbers, max_number) {

  const div_card = document.createElement("div");
  div_card.classList.add("card");
  document.getElementById("cards").append(div_card);

  let numbers = await get_different_numbers(n_numbers, max_number);

  numbers.sort((a,b) => a - b).forEach(n => {
    const div_number = document.createElement("div");
    div_card.append(div_number);
    div_number.classList.add("number");
    div_number.textContent = n;
  });

}

async function get_different_numbers (n_numbers, max_number) {

  let numbers = [];
  while (numbers.length < n_numbers) {
    const proposed_number = await get_number(max_number);
    if (!numbers.includes(proposed_number)) {
      numbers.push(proposed_number);
    }
  }

  return numbers;

}