let shape1 = {
    "shape": "Square",
    "height": 50,
    "width": 50,
    "area": function () { 
        return this.height * this.width 
    }
}

let shape2 = {
    shape: "Rectangle",
    height: 25,
    width: 75,
    area: function () {
        return this.height * this.width
    }
}

let shape3 = {
    "shape": "Triangle",
    "height": 30,
    "width": 60,
    "area": function () {
        return this.height * this.width
    }
}

let shapes = [shape1, shape2, shape3]

shapes.forEach(shape => console.log(` This is a ${shape.shape} with the height ${shape.height} and with a with of ${shape.width} and an area of ${shape.area()}`))