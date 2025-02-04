
// A Frågor 
// A1 Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla ID:en på de tre personer med lägst budget.
function a1 (data) {

    // Sortera databasen ut efter budget lägst till högst
    let idThreeLowestBudgets = data.PEOPLE.sort((a, b) => a.budget - b.budget)
    // Går igenom databasens items och omvandlar varje item till  person id i en ny array 
    .map(id => id.personId)
    // vi tar ut de tre första id från arrayen 
    .slice(0, 3)

    console.log(idThreeLowestBudgets)

  return idThreeLowestBudgets
  
  }
  
  // a1(dataset1)
  

  // A2 Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla för- och efternamn (sammanslaget i en sträng) på de personer som ska handla 3 varor.
  function a2 (data) {

    // filtrerar databasen baserat på hur många varor de ska handla genom 
    let buyThreeOrMore = data.PEOPLE.filter ( (person) => {
      // variabel sum med värde 0 
      let sum = 0; 
      // loop där vi loppar igenom varje persons shoppingLista
      for ( let i = 0; i < person.shoppingList.length; i++ ) {
        // Lägger ihop summan från varje personens qunatity i deras lista 
        sum += person.shoppingList[i].quantity
      }
      // om summan är lika med 3 retunerar vi personen  
      if ( sum == 3) {
        return person
      }
    })
    // Går igenom databasen item för att få en ny array av för och efternamn 
    .map(name => name.firstName + " " + name.lastName)

    console.log(buyThreeOrMore)
    return buyThreeOrMore
  }
  // a2(dataset1)
  

  // A3 Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla ID:en på de personer som har en budget som är mindre än 20.
  function a3 (data) {

    // filtrerar igenom databasen och filtrerar de som har en budget mindre än 20 och retunerar de som är true.
    let personIdLowBudger = data.PEOPLE.filter((person) => person.budget < 20)
    // Får en ny array av personernas id 
    .map(id => id.personId);

    console.log(personIdLowBudger)
    
    return personIdLowBudger
  }
  // a3(dataset1);
  

  // A4 Dataset 1: Funktionen ska ta emot dataset 1 och returnera en sträng. Strängen ska innehålla namnet på den dyraste varan (om det finns flera varor som har samma pris räcker det med att ni tar den första).
  function a4 (data) {
    
    // sorterar databasen efter högt till låg pris. 
    let expenssiveProduct = data.GROCERIES.sort((a, b) => b.price - a.price)
    // omvandlar arrayen till en lsita av produt namn 
    .map(product => product.groceryName)
    // tar bort alla utom den första i listan  
    .slice(0, 1)

    console.log(expenssiveProduct.toString())
    return expenssiveProduct.toString();

  }
  // a4(dataset1);
  
  
  // A5 Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla namnet på de varor som inte har ett korrekt pris (alltså där priset är null).
  function a5 (data) {
  
    //filtrerar databasen efter de producter som har null som pris
    let wrongPrice = data.GROCERIES.filter((noPrice) => noPrice.price == null)
    // tar namnet och lägger i en ny array 
    .map(name => name.groceryName)

    console.log(wrongPrice)
    return wrongPrice
  }
  // a5(dataset1);
  

  // A6 Dataset 1: Funktionen ska ta emot dataset 1 och en sträng samt returnera ett objekt. Funktionen ska hämta den vara (hela objektet) vars namn är det samma som sträng-argumentet (t.ex. "Blackberries").
  function a6 (data, sträng) {

    // filtrerar efter namnet på producet matchar den givna strängen 
    let searchListByName = data.GROCERIES.filter((name) => name.groceryName == sträng)

    console.log(searchListByName[0])

    // [0] för att ta ut objectet 
    return searchListByName[0]
  
  }
  // a6(dataset1, "Oil - Hazelnut");
  

  // A7 Dataset 1: Funktionen ska ta emot dataset 1 och en siffra samt returnera ett objekt. Funktionen ska hämta den person (hela objektet) vars ID är det samma som siffer-argumentet.
  function a7 (data, siffra) {

    // filtrerar efter id på personen matchar den givna siffran 
    let searchListByID = data.PEOPLE.filter((person) => person.personId == siffra)

    console.log(searchListByID[0])

  // [0] för att ta ut objectet 
    return searchListByID[0]

  }
  // a7(dataset1, 5)
  
  
  /// B Frågor 
  // 1. Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla för- och efternamn (sammanslaget) på de personer som ska handla 4 eller fler varor.
  function b1 (data){
  
    // filtrerar datbasen efter personer som ska handla fyra eller fler varor  
    let buyFourOrmore = data.PEOPLE.filter((person) => {

      let sum = 0; 
      // loop för att hå igenom personernas shoppinglista längd 
      for (let i = 0; i < person.shoppingList.length; i++ ) {
        // lägger ihop personen quantity 
        sum += person.shoppingList[i].quantity
        // console.log(sum)
      } 

      // om personen har fyra eller fler i quantity retunera personen 
      if(sum >= 4) {
        return person
      }
      // lägger namn och efternamn i en ny array 
    }).map(person => person.firstName + " " + person.lastName)

    console.log(buyFourOrmore)

    return buyFourOrmore

  }
  // b1(dataset1)
  

  // 2. Dataset 1: Funktionen ska ta emot dataset 1 och en siffra samt returnera en siffra. 
  // Funktionen ska räkna ut och returnera den totala kostnaden för en persons inköpslista (vilket är den personen vars ID är det samma som siffer-argumentet). 2 av 3 Programmering för webben VT21

function b2 (dataset1, siffra){

    let sum = 0

    // filtrerar ut personen vars id stämmer överäns med siffra 
    let person = dataset1.PEOPLE.filter((person) => person.personId == siffra);

    // loppar går igenom personens lista 
    for( let i = 0; i < person[0].shoppingList.length; i++){
      // jämför varje grocurrey id med personens groceryId i shoåpingslistan 
      let grocerie = dataset1.GROCERIES.filter((product) => product.groceryId == person[0].shoppingList[i].groceryId)

      // lägger ihop pris gånger qunatity i shopping listan 
      sum += grocerie[0].price * person[0].shoppingList[i].quantity;

    }

    console.log(person)
    console.log(sum)
    return sum
}
// b2 (dataset1, 2)
  

  // 3. Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla för- och efternamn (sammanslaget i en sträng) på de personer som ska köpa varan med namnet "Pepper - Jalapeno".
  
  function B3 (data) {

    // filtrerar ut grouceryname om det stämmer över änns med vad som är inom "...."
    let productID = data.GROCERIES.filter((name) => name.groceryName === "Pepper - Jalapeno")
    .map(id => id.groceryId) // lägger id i en ny array 
    console.log(productID)

    // filtrerar personerna efter om shopinlistans items i listan stämmer överänns med id i product listan 
    let people = dataset1.PEOPLE.filter((person) => person.shoppingList.some((item)=> item.groceryId == productID))
    console.log(people)

    // tar för och efternamn och lägger i en ny array 
    let names = people.map((person) => `${person.firstName} ${person.lastName} `)
    console.log(names)
        
    return names
  
  } 
// B3(dataset1)
  

  // 4. Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla ID:en på de
  // personer som ska köpa varan med ID:et 37.


  function b4 (data) {

    let people = data.PEOPLE.filter((person) => person.shoppingList.some((item) => item.groceryId == 37))
    .map(person => person.personId)

    console.log(people)
    return people

}
// b4(dataset1)

function B4(data) {
  let person = data.PEOPLE.filter((person) => person.shoppingList.some((item) => item.groceryId == 37)).map((person) => person.personId)
  console.log(person);

  return person
}
// B4(dataset1)


// 1. Dataset 1: Funktionen ska ta emot dataset 1 och returnera en array. Arrayen ska innehålla för- och
// efternamn (sammanslaget i en sträng) på de personer vars budget inte räcker till. (De ska alltså köpa
// varor för mer pengar än de har budget)

function c1 (data) {
  
  // filtrerar ut personerna ut efter 
    let lowBudget = data.PEOPLE.filter((person) => {
      let sum = 0;

      // loppar igenom personerna shoppinglistas 
      for (let i = 0; i < person.shoppingList.length; i++) {
        // filtrerar varor efter om varorna har samma id i grousery list och personernas shopping list 
        let grocerie = data.GROCERIES.filter(product => product.groceryId == person.shoppingList[i].groceryId)
        // gångar grouceri price med quanity i personens shopping lista 
        sum += grocerie[0].price * person.shoppingList[i].quantity
        
        console.log(grocerie)
        console.log(sum)

        // om personen har mindre budget än summa retunera person
        if ( sum < person.budget) {
          return person
        }
      } // tar deras för och efternamn och lägger i en ny array 
    }).map(person => person.firstName + " " + person.lastName)

    console.log(lowBudget)

    return lowBudget
}

c1(dataset1)

