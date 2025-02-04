function grade (points) {
    if (points <= 30 && points >= 26) {
        return "A"
    } else if (points <= 25 && points > 20) {
        return "B"
    } else if (points <= 20 && points > 15) {
        return "C"
    } else if (points <= 15 && points > 10) {
        return "D"
    } else if (points <= 10 && points > 5) {
        return "E"
    } else if (points <= 5 && points >= 0) {
        return "F"
    } else {
        return "Not a valied grade"
    }
}

function gradeLabel (grade) {
    if (grade == "A") {
        return "26-30"
    } else if (grade == "B") {
        return "20-25"
    } else if (grade == "C") {
        return "15-20"
    } else if (grade == "D") {
        return "10-15"
    } else if (grade == "E") {
        return "5-10"
    } else if (grade == "F") {
        return "0-5"
    } else {
        return "Not a grade"
    }
}