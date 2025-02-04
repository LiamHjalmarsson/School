function Event (day, time, city) {
    this.day = day,
    this.time = time,
    this.city = city
} 

Event.prototype.getDay = function () {
    return this.day
}

Event.prototype.getTime = function () {
    return this.time
}

Event.prototype.getCity = function () {
    return this.city
}

Event.prototype.toString = function () {
    return `${this.getCity()} ${this.getDay()} ${this.getTime()}`
}

let hbg = new Event ("Friday", 11.15, "Helsingborg");
console.log(hbg.getDay());
console.log(hbg.getTime());
console.log(hbg.getCity());
console.log(String(hbg))