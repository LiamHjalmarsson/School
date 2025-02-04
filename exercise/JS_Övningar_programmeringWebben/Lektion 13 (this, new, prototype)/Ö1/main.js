let dude = {
    "first name": "Jeffrey",
    "last name": "Lebowski"
};

function printClearAndDoubleCheck(dude) {
    // 1. Print the message "The Dude`s actual name is <first name> <last name>"
    console.log(`The dude´s actual name is ${dude["first name"]} ${dude["last name"]}`)

    // 2. Delete both properties from the object
    delete(dude["first name"]);
    delete(dude["last name"]);

    // 3. Make an if-statement that:
    //      - Makes sure both the "first name" AND "last name" properties
    //        does NOT exists in `dude`
    //      - if so, print the message "All good and clear!"
    if (!dude["first name"] && !dude["last name"]) {
        console.log("all good and clear");
    } else {
        console.log(`all is not good and clear yet`)
    }

    // 4. return, the now empty, object
    console.log(dude)
    return dude
}

printClearAndDoubleCheck(dude);

// Expected ouput in the console:
//
//  "The Dude`s actual name is Jeffrey Lebowski"
//  "All good and clear"
//  {}