function add (a, b) {
    return a + b;
}

let ad = (a,b) => a + b ;

// Vad tror ni denna funktionen gör? Pröva att Googla på termen "palindrome"
function palindrome (string) {
    // Här sker det lite "magi", kan ni lista ut vad som egentligen sker? Pröva
    // att anropa respektive ".split", ".reverse", ".join" individuellt i konsolen.
    return string == string.split("").reverse().join("");
}

////////////////////////////////////

function gradeToLetter (points) {
    if (points < 10) {
        return "F";
    } else if (points < 15) {
        return "E";
    } else if (points < 20) {
        return "D";
    } else if (points < 25) {
        return "C";
    } else if (points < 30) {
        return "B";
    } else {
        return "A";
    }
}

let gradeletter = (points) => {
    if (points < 10) {
        return "F";
    } else if (points < 15) {
        return "E";
    } else if (points < 20) {
        return "D";
    } else if (points < 25) {
        return "C";
    } else if (points < 30) {
        return "B";
    } else {
        return "A";
    }
}

////////////////////////////////////

function sumArrayOfNumbers (numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let sumArray = (numbers) => {
    let sum = 0; 

    numbers.forEach(number => {
        sum += number
    });
    
    return sum
}

////////////////////////////////////

function betweenZeroAndTen (value) {
    return value > 0 || value < 10;
}


let zeroAndTen = (value) => value > 0 || value < 10;