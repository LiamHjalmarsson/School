/*

Låt oss koda en automatisk bingo!
Den skapar alla brickor och kontrollerar sifforna på egen hand.
Du bestämmer vilka siffror som kommer ut genom att klicka på kontrollen (se video)

Notera att allting startar nu med denna funktionsanrop:
play_bingo(16, 5, 29);

Där första siffran är antalet brickor i spelet, andra siffran hur många siffror varje
bricka har och sista siffran det högsta numret i spelet (siffrorna går alltså i detta
fall från 1 till 29).

Tips: Kolla på CSS-nyckeln "pointer-events".

*/

play_bingo(16, 5, 29);

async function play_bingo (containers, cards, keys) {
    
    for (let i = 0; i < containers; i++) {
        await get_containers(cards, keys)
    }

    get_controler(keys)
}

async function get_containers (cards, keys) {
    let container = document.createElement("div")
    document.querySelector("#cards").append(container)
    container.classList.add("card")

    let numbers = await get_numbers(cards, keys)

    numbers.sort((a, b) => a > b).forEach(number => {
        let div = document.createElement("div")
        div.classList.add("number")
        div.textContent = number
        container.append(div)
    });
} 

async function get_numbers (cards, keys) {
    let numbers = []

    while (numbers.length < cards) {
        let prop_number = await get_number(keys)
        if(!numbers.includes(prop_number)) {
            numbers.push(prop_number)
        }
    }

    return numbers
}

async function get_number (keys) {
    let req = `https://teaching.maumt.se/apis/random_number/?min=1&max=29&t_min=0&t_len=0.4`

    return await(await fetch(req)).json()
}


function get_controler (keys) {
    for ( let i = 1; i <= keys; i++) {
        let btn = document.createElement("div");
        btn.classList.add("number")
        btn.textContent = i
        document.querySelector("#control").append(btn)

        btn.addEventListener("click", control_number) 

        function control_number () {
            btn.classList.add("out")

            let containers = document.querySelectorAll("#cards > div"); 
            containers.forEach(container =>  check_numbers_in_Container(container, i))
            containers.forEach(check_bingo)
        }
    }
}

function check_numbers_in_Container(container, i) {
    let number_cards = container.querySelectorAll("div"); 

    number_cards.forEach(check_number_card) 

    function check_number_card (number) {

        let card = parseInt(number.textContent)

        if (card === i) {
            number.classList.add("marked");
        }

    }
}

function check_bingo (container) {
    let cards_in_container = container.querySelectorAll("div").length
    let marked_cards = container.querySelectorAll(".marked").length

    if (marked_cards === cards_in_container) {
        we_have_bingo(container)
    }
}


function we_have_bingo (container) {
        // Mark card with bingo
        container.classList.add("bingo");
  
        // Write "bingo" on card
        let bingo_word = document.createElement("div");
        bingo_word.classList.add("bingo_word");
        bingo_word.textContent = "BINGO!";
        container.append(bingo_word);
      
        // Change background
        document.body.classList.add("bingo");

        document.querySelectorAll(".card:not(.bingo)").forEach(card => card.classList.add("not_bingo"))

        let controlers = document.querySelectorAll("#control > div")
        controlers.forEach(deactivate)

        function deactivate (controler) {
            controler.style.pointerEvents = "none";
            if (!controler.classList.contains("out")) {
                controler.classList.add("not_out");
            }
          }
}