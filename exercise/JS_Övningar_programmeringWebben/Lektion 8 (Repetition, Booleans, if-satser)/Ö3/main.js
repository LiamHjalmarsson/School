function min (a, b) {
    if (a < b) {
        return a
    }
    return b
}

function max (a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    }
    return c
}