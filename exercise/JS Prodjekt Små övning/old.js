function findUnviersity (id) {
    return DB.UNIVERSITIES.filter((university) => university.id == id)[0]
}

function findProgramUniversity (findUnviersity) {
    return DB.PROGRAMMES.filter((program) => program.universityID == findUnviersity.id)
}

console.log(findProgramUniversity(findUnviersity(1)))

function findUniProg (id){
    
    let university = findUnviersity(id)

    let programmes = findProgramUniversity(university)

    let programName = []

    programmes.forEach(item => {
        programName.push(item.name)
    })

    return programName
}


function findCities (id){
    let country = DB.COUNTRIES.filter((country)=> country.id == id)[0]
    return DB.CITIES.filter((city)=> city.countryID == country.id)
}


function findUnies (id){
    let city = DB.CITIES.filter((city)=> city.id == id)[0]
    return DB.UNIVERSITIES.filter((uni)=> uni.cityID == city.id).map((uni)=> uni.name).join(", ")
}

function cityUniIDs (id){
    let city = DB.CITIES.filter((city)=> city.id == id)[0]
    return DB.UNIVERSITIES.filter((uni)=> uni.cityID == city.id).map((uni)=> uni.id)
}

function cityProgrammes(id){
    let city = DB.CITIES.filter((city)=> city.id == id).map((city)=> city.id)[0]
    let unies = cityUniIDs(city)
    let progNames = []
    for (let uni of unies){
        console.log(uni)
        progNames.push(findUniProg(uni))
    }
    return progNames
}

function setCityBackground (name){
    let city = DB.CITIES.find((city)=> city.name == name)
    let div = document.getElementById("img")
    div.style.backgroundImage = `url(/images/${city.name.toLocaleLowerCase()}_big_1.jpg)`
}

function idFiled (id) {
    return DB.FIELDS.filter((field) => field.id == id)[0]
}

// console.log(idFiled(1))


function findProgramOnfiled(id) {
    return DB.PROGRAMMES.filter((program) => program.subjectID == idFiled(id).id)
}

// console.log(findProgramOnfiled(6))


function findLangauge (id) {
    return DB.LANGUAGES.filter((language) => language.id == id)[0]
}

// console.log(findLangauge(1))


function programsOnLangauge (id) {
    return DB.PROGRAMMES.filter((prog) => prog.language == findLangauge(id).id)
}

// console.log(programsOnLangauge(1))


function progOnLangAndProg (id, id2) {
    return DB.PROGRAMMES.filter((prog) => prog.language == id && prog.subjectID == id2) 
}

// console.log(progOnLangAndProg(1,3))