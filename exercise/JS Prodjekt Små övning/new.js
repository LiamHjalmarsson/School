let selectElement = (select) => document.querySelector(select); 

let clearResults = () => selectElement("#search-result").innerHTML = "";



// function getCitbackGroundIMG based on name of city put in parameter
function setCityBackground (){

    for (let i = 0; i < DB.COUNTRIES.length; i++) {

        let divPic = document.createElement("div");
        document.querySelector("main").appendChild(divPic)
        divPic.classList.add("img-slide");

        let img = document.createElement("div");
        divPic.appendChild(img)
        img.id = "img";
        img.style.backgroundImage = `url(/images/${getCountry(i)}_big_1.jpg)`

        let cityName = document.createElement("h3")
        divPic.appendChild(cityName)

        cityName.innerHTML = ` 
            <h3 id="title-card">
                ${findCountry(i).name}
            </h3>
            `
    }    
}

setCityBackground()

function findCountry (id) {
    return DB.COUNTRIES.filter((country) => country.id == id)[0]
}   
// console.log(findCountry(1))

function getCountry (id) {
    return findCountry(id).name
}
// console.log(getCountry(1))

function findUniversity (id) {
    return DB.UNIVERSITIES.filter((university) => university.id == id)[0]
}
// console.log(findUniversity(1))

function findProgramUniversity (id) {
    return DB.PROGRAMMES.filter((program) => program.universityID == findUniversity(id).id)
}
// console.log(findProgramUniversity(1))

function findUniversityProgram (id) {
    return findProgramUniversity(id).map(program => program.name)
}
// console.log(findUniversityProgram(1))

function findCities (id) {
    return DB.CITIES.filter((city)=> city.countryID == findCountry(id).id)
}
// console.log(findCities(1))

function city (id) {
    return DB.CITIES.filter((city) => city.id == id)[0]
}
// console.log(city(1))

function findUniversityS (id) {
    return DB.UNIVERSITIES.filter((university) => university.cityID == city(id).id).map((university) => university.name)
}
// console.log(findUniversityS(1))

function universitiIDSinCity (id) {
    return DB.UNIVERSITIES.filter((university) => university.cityID == city(id).id).map(university => university.id)
}
// console.log(universitiIDSinCity(1))

function programmesInCity (id) {
    let programNames = []

    universitiIDSinCity(id).forEach((item) => programNames.push(findUniversityProgram(item)))
    
    return programNames
}
// console.log(programmesInCity(1))

function filedID (id) {
    return DB.FIELDS.filter((field) => field.id == id)[0]
}
// console.log(filedID(1))

function findProgramOnfiled(id) {
    return DB.PROGRAMMES.filter((program) => program.subjectID == filedID(id).id)
}
// console.log(findProgramOnfiled(1))

function findLangauge (id) {
    return DB.LANGUAGES.filter((language) => language.id == id)[0]
}
// console.log(findLangauge(1))

function programsOnLangauge (id) {
    return DB.PROGRAMMES.filter((program) => program.language == findLangauge(id).id)
}
// console.log(programsOnLangauge(2))


function stad (name) {
    return DB.CITIES.find((city) => city.name == name)
}

function progOnLangAndProg (id, id2, id3) {
    return DB.PROGRAMMES.filter((program) => program.language == findLangauge(id).id && program.subjectID == filedID(id3).id) 
}
// console.log(progOnLangAndProg(1,1,1))


function getTeacersOnSearch () {

    let search = selectElement(".searchbar").value;

    // clearResults();

    if (search.length > 0) {
        
    clearResults();

        for ( let i = 0; i < DB.COUNTRIES.length; i++ ) {

            if ( DB.COUNTRIES[i].text.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ) {

                selectElement("#search-result").innerHTML += `
                    <div class="info">
                       <h3> ${findCountry(i).name} </h3>
                        ${findCountry(i).text}
                    </div>
                 `
            }
        }   
    } 
}

selectElement(".searchbar").addEventListener("keyup", getTeacersOnSearch);

