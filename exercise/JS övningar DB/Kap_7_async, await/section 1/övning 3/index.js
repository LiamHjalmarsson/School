/*

Samma problem som unit 6.2.4 (alltså övning 3 i sektionen 6.2).

Dessa resurser finns (jag har lagt till en längre väntetid så ni bättre hinner se vad som händer):
https://teaching.maumt.se/apis/attractions/?t_min=2&attraction=X
https://teaching.maumt.se/apis/attractions/?t_min=2city=Y
https://teaching.maumt.se/apis/attractions/?t_min=2country=Z

Där X måste vara en av följande: Lavapies, Templo_de_Debod, Fontana_di_trevi, Pantheon, Brandenburger_Tor eller Kreuzberg.
Notera underscore i namnen på sevärdheterna!

Y måste vara någon av följande: Madrid, Rome eller Berlin.

Z måste vara någon av följande: Spain, Italy, Germany

Koda en sida som fungerar som den på videon. Du ska koda två lösningar:

(1) I den första lösning får inte .then förekomma.
(2) I den andra får inte async eller await förekomma (ja, som ni löste den i sektionen 6.2. Kan du fixa det igen utan att kolla på lösningen?)

*/

document.querySelector("input").addEventListener("keyup", (e) => display_Info(e))

async function display_Info (e) {
    if (e.key === "Enter") {
        get_Info(e.target.value)
    }
}

async function get_Info (value) {

    let attraction = await get_attraction(value)

    document.querySelector(".attraction_name").textContent = attraction.name
    document.querySelector(".attraction_info").textContent = attraction.info
    document.querySelector(".city").textContent = attraction.city
    document.querySelector(".city_info").textContent = `Reciving the information about city`

    let city = await get_City(attraction.city)
    console.log(city)
    document.querySelector(".city_info").textContent = city.info
    document.querySelector(".country").textContent = city.country
    document.querySelector(".country_info").textContent = `Reciving the information about country`

    let country = await get_country(city.country)
    document.querySelector(".country_info").textContent = country.info
}


async function get_attraction (value) {
    let attraction_req = `https://teaching.maumt.se/apis/attractions/?t_min=2&attraction=${value}`
    return await(await fetch(attraction_req)).json()
}

async function get_City (city) {
    let city_req = new Request(`https://teaching.maumt.se/apis/attractions/?t_min=2&city=${city}`)
    return await(await fetch(city_req)).json()
}

async function get_country (country) {
    let country_req = `https://teaching.maumt.se/apis/attractions/?t_min=2&country=${country}`
    return await(await fetch(country_req)).json()
}
