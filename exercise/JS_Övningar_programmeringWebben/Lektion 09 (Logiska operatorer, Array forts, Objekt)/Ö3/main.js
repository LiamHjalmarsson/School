function range (start, amount) {
    let array = []

    for (let i = start; i < start + amount; i++) {
        array.push(i)
    }

    return array
}

console.log(range(0, 5))
console.log(range(1, 5))
console.log(range(3, 3))
console.log(range(0, 2))
console.log(range(5, 10))