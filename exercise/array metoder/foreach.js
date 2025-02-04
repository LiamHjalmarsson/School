// https://www.youtube.com/watch?v=SXb5LN_opbA

const numbers = [1, 2, 3 ,4 ,5 ,6]

numbers.forEach(consoleItem); 

function consoleItem(item, index) {
    // console.log("a[" + index + "] = " + item)
}


const numbersForeach = [1, 2, 3 ,4 ,5 ,6]

numbersForeach.forEach((item, index) =>  {
    console.log("a[" + index + "] = " + item)
    // console.log(arr)
});

const numberSum = [1, 2, 3 ,4 ,5 ,6]

let sum = 0; 

numberSum.forEach((item) => {
    sum += item
})

console.log(sum)

const letters = ["a", "b", "c", "a", "b", "f"];

let count = []; 

letters.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
})

console.log(count)