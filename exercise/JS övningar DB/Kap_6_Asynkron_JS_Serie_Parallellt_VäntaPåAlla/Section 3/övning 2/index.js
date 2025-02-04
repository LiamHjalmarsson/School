const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");

function get_numbers () {

    let counter = 0
    
    fetch(random_number_request)
    .then(r => r.json())
    .then(r => {
        number(r, 1)
    })
    
    fetch(random_number_request)
    .then(r => r.json())
    .then(r => {
        number(r, 2)
    })
    
    function number (r, id) {
        document.getElementById(`number${id}`).textContent = r
    
        counter++
    
        if (counter === 2) {
            let n1 = parseInt(document.getElementById(`number1`).textContent)
            let n2 = parseInt(document.getElementById(`number2`).textContent)
            
            document.getElementById(`sum`).textContent = n1 + n2
            
        }
    }
}



document.querySelector("button").addEventListener("click", get_numbers)