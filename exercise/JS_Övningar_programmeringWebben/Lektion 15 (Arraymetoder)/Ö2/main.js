// 1. Gör om alla namnen till versaler.

let names = [
    "Andrew",
    "Peter",
    "Eliza",
    "Kirsten",
    "Jeanette"
];

let namesToLow = names.map(name => name.toLocaleLowerCase());;
console.log(namesToLow)

// 2. Gör om arrayen så att varje element även innehåller egenskapen "area"
//    (vilket ni räknar ut genom "height * width").

let triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];

triangles.map(triangle => {triangle.area = triangle.height * triangle.width})
console.log(triangles)

// 3. Filtrera ut alla filmer som släpptes inom perioden 1990 - 2000. 

let movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

let movie1990_2000 = movies.filter(movie => movie.year > 1990 && movie.year < 2000);
console.log(movie1990_2000)

// 4. Filtrera ut alla filmer som släpptes på 2000-talet och gör om
//    resultatet till en array innhållande alla titlar. Det vill säga något
//    i stil med följande: ["Batman Begins", "Batman: Under the Red Hood", ...].

let movie2000 = movies.filter(movie => movie.year > 2000).map(movie => movie.title);
console.log(movie2000);

//
//    Utgå från arrayen "movies" från fråga 3.

// 5. Från objektet nedan ska ni filtrera ut alla "tasks" som är avklarade och
//    hade hög prioritet, men slutresultatet ska vara en array som bara består av
//    deras ID:n.

let todoList = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

let tasksDone = todoList.tasks.filter(task => task.complete == true && task.priority == "High").map(task => task.id);
console.log(tasksDone);

// 6. Från samma objekt från fråga 5 ska ni: filtrera ut alla "tasks" som inte
//    är avklarade och har låg prioritet. Gör sedan om den listan så att varje
//    element är ett objekt med egenskapen "name" som är "titel" plus "id" (inom
//    paranteser). Det vill säga: [{ name: "Do something (101)" }, ...].

let taskNotDone = todoList.tasks.filter(task => task.complete == false && task.priority == "Low").map(task => {
    return task = {name: task.title + " ( " + task.id + " ) "}
});
console.log(taskNotDone)




//////

// // ARRAY METODER uppfylla och ger tillbaka 

// // vanlig for loop 
// // for(let i = 0; i > names.length; i++) {
// //     let name = names[i];
// //     console.log(name);

// //     console.log(names[i]);
// // }

// // for (let name of names) {
// //     console.log(name)
// // }

// // for (let name in names){
// //     console.log(name)
// // }

// // forEach för varje grej i names callback 
// //names.forEach
// names.forEach((name) => { // den gör hela (let i = 0; i > names.length; i++) ochlägger till det i variabel 
//     console.log(name); // för och nackdelar ska vi lopa genbom kan vi använda for each 
// })

// // names.forEach(function(name){
// //     console.log(name)
// // })

// // Alla array uppbyggda på for each 
// names.forEach(name => console.log(name)) // 

// //FILTER
// let filtered = names.filter(name => name == "Andrew");
// console.log(filtered);

// let filter = names.filter(name => {
//     return name == "Andrew";
// })
// console.log(filter);

// let filterSS = names.filter((name,index) => name == "Andrew");


// //Map tar ett värde och bearbetar 
// let mapped = names.map(name => { // den tar två argrument / parametrar 
//     return name + "1";
// })
// console.log(mapped);

// let mappedOne = names.map((name,index) => {
//     return name + "" + index;
// })
// console.log(mappedOne);

// // names.find 
// let found = names.find(name => {
//     return name == "Andrew"
// })

// // names.sort



/////////////////////////////////

// // 2. Gör om arrayen så att varje element även innehåller egenskapen "area"
// //    (vilket ni räknar ut genom "height * width").

// let triangles = [
//     { width: 12, height: 22,},
//     { width: 21, height: 12 },
//     { width: 35, height: 49 },
//     { width: 12, height: 50 },
//     { width: 20, height: 35 }
// ];

// // let mappedTrinagel = triangles.map(triangle => {
// //     triangle.area = triangle.height * triangle.width; 
// // })
// // console.log(mappedTrinagel);

// triangles.map(triangle => {
//     triangle.area = triangle.height * triangle.width; 
// })

// let tiiangelfilter = triangles.filter(triangle => {
//     return triangle.width == 12;
// })

// console.log(tiiangelfilter);
// console.log(triangles);



/////////////////////////

// let mappedTodos = completedTodos.map(todo => {
//     // let newTodo = {
//     //     id: todo.id,
//     //     title: todo.title
//     // }
//     // return newTodo;

//     return todo.id;
// });

// console.log(mappedTodos); 



// let mappedTodo = filterdTodo.map ( todo => {
//     return todo = {name: todo.title + " " + todo.id}; 
// })

// console.log(mappedTodo);
