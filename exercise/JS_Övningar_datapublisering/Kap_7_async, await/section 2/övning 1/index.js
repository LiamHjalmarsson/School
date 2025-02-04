/*

Att själv bestämma vilka siffror som kommer ut känns inte som
riktigt bingo. I denna övning ska vi istället ha en knapp. När du 
klickar på den så hämtas det en ny random siffra från resursen:
https://teaching.maumt.se/apis/random_number/?min=1&max=MAX_SIFFRAN&t_min=3&t_len=2
(viktigt att låta resursen ta lite tid med hjälp av t_min och t_len)

Krav:
(1) samma siffra kan inte komma ut två gånger.

Samma anrop som startar det hela som i förra övningen.

*/

play_bingo(16, 5, 29);

async function play_bingo (containers, cards, keys) {
    let text_btn = "New number"

    let button = document.getElementById("new_number")

    button.textContent = text_btn

    await make_all_cards(containers, cards, keys)

    controller(keys)

    button.addEventListener("click", new_number_out)
    
    async function new_number_out () {
        button.setAttribute("disable", true)
        button.textContent = "Wating for new number"
        button.setAttribute("disabled", true);
    
        let number = await get_new_number(keys) 

        button.textContent = `It's a ${number}!`;
        document.getElementById("number" + number).classList.add("just_out");

        setTimeout(() => {
            document.getElementById("number" + number).classList.add("out");
            document.getElementById("number" + number).classList.remove("just_out");

            button.removeAttribute("disabled");
            button.textContent = text_btn;
        }, 2000);
        
        
        let cards = document.querySelectorAll("#cards > div");

        cards.forEach(card_dom => check_number_in_card(card_dom, number));

        cards.forEach(check_bingo);

    }
}

// Lösning med rekursiv funktion... lite svårt att förstå första gången men elegant.
// (en rekursiv funktion är en funktion som anropar sig själv)
async function get_new_number (keys) {
  
    let req = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${keys}&t_min=0&t_len=0.4`);
    let number = await (await fetch(req)).json();

    console.log(number);
    number = parseInt(number);
    
    // Har siffran redan varit ute? I så fall, anropa funktionen igen och returnera 
    // resultatet av nya anropet.
    let numbers_out = get_numbers_out();
    if (numbers_out.includes(number)) {
        console.log(`ojdå, den har redan varit ute (${number})`);
        return get_new_number(keys);
    }
  
    return number;
  }

  // Lösning med while-loop
// async function _get_new_number (max_number) {
//     let number = -1;
//     const request = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${max_number}t_min=3&t_len=2`);
//     const numbers_out = get_numbers_out();
  
//     // Hämta siffror tills vi får en siffra som inte har varit ute ännu
//     while (number === -1) {
//       number = await (await fetch(request)).json();
//       if (numbers_out.includes(number)) {
//         console.log(`ojdå, den har redan varit ute (${number})`);
//         number = -1;
//       }
//     }
//     return number;
//   }

function get_numbers_out () {
    let numbers_out = document.querySelectorAll(".number.out");
    // Transform into a proper Array so we can use .map() because
    // .querySelectorAll() does not return a proper array
  
    numbers_out = Array.from(numbers_out);
    return numbers_out.map(n_dom => parseInt(n_dom.textContent));
}

async function make_all_cards (container, cards, keys) {
    for (let i = 0; i < container; i++) {
      await display_containers(cards, keys);
    }
  }
  
  async function get_number (keys) {
    let req = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${keys}&t_min=0&t_len=0.4`)

    return await(await fetch(req)).json()
}

async function display_containers (cards, keys) {
    let container = document.createElement("div")
    document.querySelector("#cards").append(container)
    container.classList.add("card")
    
    let numbers = await check_number(cards, keys)

    numbers.sort((a, b) => a > b).forEach(number => {
        let card = document.createElement("div")
        card.textContent = number
        card.classList.add("number")

        container.append(card)
    });
}

async function check_number (cards, keys) {
    let numbers = []

    while (numbers.length < cards) {
        let propsed_number = await get_number(keys)
        if (!numbers.includes(propsed_number)) {
            numbers.push(propsed_number)
        }
    }

    console.log(numbers)
    return numbers
}

function controller (keys) {
    for (let i = 0; i <= keys; i++) {
        let button = document.createElement("div")
        button.textContent = i
        button.classList.add("number")
        button.id = `number${i}`
        
        document.querySelector("#control").append(button)
    }

    // button.addEventListener("click", control_Numbers)

    // function control_Numbers () {
    //     button.classList.add("out");
        
    //     let cards = document.querySelectorAll("#cards > div")
    //     cards.forEach(card => check_number_in_card(card, keys))
    //     cards.forEach(check_bingo)

    // }
}

function check_bingo (cards) {
    let number_cards = cards.querySelectorAll("div").length
    let number_cards_marked = cards.querySelectorAll(".marked").length

    if (number_cards === number_cards_marked) {
        bingo(cards)
    }
}

function check_number_in_card (cards, keys) {
    let numbers = cards.querySelectorAll("div")

    numbers.forEach(check_number_of_card)

    function check_number_of_card (number) {
        let number_in_card = parseInt(number.textContent)

        if (number_in_card === keys) {
            number.classList.add("marked")
        }
    }
}

function bingo (cards) {
    cards.classList.add("bingo");

    let bingo_word = document.createElement("div")
    bingo_word.classList.add("bingo_word")
    bingo_word.textContent = "BINGO Winner winner chicken dinner"

    cards.append(bingo_word)

    document.body.classList.add("bingo")

    document.querySelectorAll(".card:not(.bingo)").forEach(card => card.classList.add("not_bingo"))

    let control = document.querySelectorAll("#control > div");

    control.forEach(deactivate);

    function deactivate (control) {
        control.style.pointerEvents = "none";
        if (!control.classList.contains("out")) {
            control .classList.add("not_out");
        }
    }
}