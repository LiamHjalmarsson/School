/*

Vi ska förfina förra övningen med ett nytt krav:
(5) siffrorna i brickorna måste alla vara olika

*/

make_all_cards(16, 5);

async function make_all_cards (containers, cards) {
    for (let i = 0; i < containers; i++) {
        await get_container(cards)
    }
}

async function get_container (cards) {
    let container = document.createElement("div")
    document.querySelector("#cards").append(container)

    let numbers = await get_numbers (cards)

    numbers.sort((a, b) => a > b ).forEach(number => {
        let div = document.createElement("div")
        div.textContent = number
        container.append(div)
    })
}

async function get_numbers (cards) {
    let numbers = []

    while(numbers.length < cards) {
        let number_prop = await get_number()
        if(!numbers.includes(number_prop)) {
            numbers.push(number_prop)
        }
    }

    return numbers

}


async function get_number () {
    let req = `https://teaching.maumt.se/apis/random_number/?min=1&max=29&t_min=0&t_len=0.4`

    return await(await fetch(req)).json()
}