

async function number () {
    const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/?t_min=1");
    let n1 = await (await fetch(random_number_request)).json()
    document.querySelector("#number1").textContent = n1

    let n2 = await (await fetch(random_number_request)).json()
    document.querySelector("#number2").textContent = n2

    document.querySelector("#sum").textContent = n1 + n2


} 

number ()