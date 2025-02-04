function createContainers () {

    for ( let i = 0; i < 5; i++) {
        let container = document.createElement("div")
        container.classList.add("colorDiv")
        document.querySelector("#wrapper").append(container)

        container.addEventListener("click", () => colorContainer(container))
    }

    document.querySelectorAll("#wrapper > div").forEach(colorContainer)
}

function colorContainer (container) {
    let req = new Request("https://teaching.maumt.se/apis/random_color/")

    container.classList.add("reciving");
    
    fetch(req)
        .then(r => r.json())
        .then(r => {
            container.style.backgroundColor = r
            container.classList.remove("reciving")
        })
} 

createContainers()