// finding the university based on the parameter number 
function findUnviersity (id) {
    // filtering the university after if university id == parameter and takes the first object 
    return DB.UNIVERSITIES.filter((university) => university.id == id)[0]
}

console.log(findUnviersity(6))

// find the program of the university based on the parameter put for function find university 
function findProgramUniversity (id) {
    // filtering programs based on their university id equal to the findUniversity functions parameter put and compares its id if its matches
    return DB.PROGRAMMES.filter((program) => program.universityID == findUnviersity(id).id)
}

console.log(findProgramUniversity(6))

// Find the programs of the university
function findUniversityProgram (id){

    // calling the findProgamUniversity function with parameter id and mapping to make a new array of just the program name 
    return findProgramUniversity(id).map((program) => program.name)
}

console.log(findUniversityProgram(6))

// function to get the country based on id 
function country (id) {
    // filtering the country based on if the countrys id is equal to the inputed number of the parameter and taking the first object
    return DB.COUNTRIES.filter((country) => country.id == id)[0]
}

console.log(country(1))

// finding the cities with parameter id of country 
function findCities (id){
    // filtering citites based on the citys country id and if its equal to the called function countrys id parameter id number
    return DB.CITIES.filter((city)=> city.countryID == country(id).id)
}

console.log(findCities(1))

// function city to get the city with parameter id 
function city (id) {
    // filtering citys after the citys.id number compared to the parameter and taking the object
    return DB.CITIES.filter((city) => city.id == id)[0]
}

console.log(city(3))

// find the universitys with help of called function city with id parameter 
function findUniversityS (id) {
    // filtering the universities after the universitys cityID Compared to the called funtion city with id parameter and getting that citys id
    // And making a new array with just the universtys name with map
    return DB.UNIVERSITIES.filter((university) => university.cityID == city(id).id).map((university) => university.name)
}

console.log(findUniversityS(3))

// getting the citys universitys ids with help of calling function city 
function cityUniversitiIDS (id) {
    // filtering the universities after cityID and comparing with called function city with parameter and getting its id
    // Mapping to make new array of universitys id in the city 
    return DB.UNIVERSITIES.filter((university) => university.cityID == city(id).id).map(university => university.id)
}

console.log(cityUniversitiIDS(3))

// function to get all the programs in the city 
function cityProgrammes (id) {

    let programNames = []

    cityUniversitiIDS(id).forEach((item) => { programNames.push(findUniversityProgram(item)) })

    return programNames
}

console.log(cityProgrammes(3))

// function getCitbackGroundIMG based on name of city put in parameter
function setCityBackground (name){
    // find the city that match the parameter name with the city name
    let countryS = DB.COUNTRIES.find((country) => country.name == name)
    // console.log(city)

    // refers to the id  img 
    let divPic = document.createElement("div");
    document.querySelector("main").appendChild(divPic)
    divPic.id = "img-card";

    let img = document.createElement("div");
    divPic.appendChild(img)
    img.id = "img";
    img.style.backgroundImage = `url(/images/${countryS.name.toLocaleLowerCase()}_big_2.jpg)`


    let cityName = document.createElement("h3")
    divPic.appendChild(cityName)

    cityName.innerHTML = ` <h3 id="title-card">
        ${countryS.name}
    </h3>`
    
}

setCityBackground("Spain")

// function to find the field with id 
function idFiled (id) {
    // filter the Fileds after filed it compaerd with the number parameter and takes the first object
    return DB.FIELDS.filter((field) => field.id == id)[0]
}

console.log(idFiled(1))

// find the program based on field 
function findProgramOnfiled(id) {
    // filter programmes with ID of supject with the called function idFiled with parameter number and gets its id number
    return DB.PROGRAMMES.filter((program) => program.subjectID == idFiled(id).id)
}

console.log(findProgramOnfiled(1))

// Find the language with id
function findLangauge (id) {
    // filterrs the language after the language id compaerd to the parameter and gets the first objectit
    return DB.LANGUAGES.filter((language) => language.id == id)[0]
}

console.log(findLangauge(2))

// get programgs based on language with parameter id 
function programsOnLangauge (id) {
    // filter the programmes with the programes language compaerd to the called function findLanguage with parameter to get id and gets its id 
    return DB.PROGRAMMES.filter((prog) => prog.language == findLangauge(id).id)
}

console.log(programsOnLangauge(2))

// function to get program based on geting the language, and the university and the filed 
function progOnLangAndProg (id, id2, id3) {
    return DB.PROGRAMMES.filter((prog) => prog.language == findLangauge(id).id && prog.universityID == findUnviersity(id2).id && prog.subjectID == idFiled(id3).id) 
}

console.log(progOnLangAndProg(1, 5, 0))


function stad (name) {
    return DB.CITIES.find((city) => city.name == name)
}

console.log(stad("Nice"))

