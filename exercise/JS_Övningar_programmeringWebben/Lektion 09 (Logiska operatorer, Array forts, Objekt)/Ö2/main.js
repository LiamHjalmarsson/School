// Placera alla era utskrifter efter denna arrayen
let users = [
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Terry",
            "last": "Medina"
        },
        "location": {
            "street": {
                "number": 6127,
                "name": "Edwards Rd"
            },
            "city": "Geelong",
            "state": "Victoria",
            "country": "Australia",
            "postcode": 3827,
            "coordinates": {
                "latitude": "-84.5589",
                "longitude": "170.8471"
            },
            "timezone": {
                "offset": "+6:00",
                "description": "Almaty, Dhaka, Colombo"
            }
        },
        "email": "terry.medina@example.com",
        "login": {
            "uuid": "e9cc935c-db21-4572-9954-c351580ae886",
            "username": "crazyrabbit275",
            "password": "eleanor",
            "salt": "SiftDk1L",
            "md5": "65708bc755439b400b08338d59a7f297",
            "sha1": "511810771be0d9d87971d4e2f05c651ceeced3bf",
            "sha256": "09f82d858a554e72e95f7af1d5245002458dd34c0fded9acedda170b507a308b"
        },
        "dob": {
            "date": "1962-06-28T14:56:46.286Z",
            "age": 60
        },
        "registered": {
            "date": "2004-02-06T18:25:24.866Z",
            "age": 18
        },
        "phone": "05-0695-5394",
        "cell": "0460-025-221",
        "id": {
            "name": "TFN",
            "value": "138454555"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/30.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/30.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Rosa",
            "last": "Hansen"
        },
        "location": {
            "street": {
                "number": 4140,
                "name": "Godthåbsvej"
            },
            "city": "Viby Sj.",
            "state": "Nordjylland",
            "country": "Denmark",
            "postcode": 10737,
            "coordinates": {
                "latitude": "81.0587",
                "longitude": "-35.8342"
            },
            "timezone": {
                "offset": "-2:00",
                "description": "Mid-Atlantic"
            }
        },
        "email": "rosa.hansen@example.com",
        "login": {
            "uuid": "a1038432-26d7-4979-8855-dc28563fa0ce",
            "username": "beautifulwolf471",
            "password": "tinman",
            "salt": "V5UeYkzE",
            "md5": "bc96078869f5e1263704154619d070f8",
            "sha1": "bbbfdc041d5b70d2b391582cd66aaa8ee5ad166c",
            "sha256": "7270f3a4413f5a06593378bcd4fcdea8a238f51063b9f5e937deb95988da6921"
        },
        "dob": {
            "date": "1994-01-30T15:50:01.303Z",
            "age": 28
        },
        "registered": {
            "date": "2003-01-26T03:32:05.043Z",
            "age": 19
        },
        "phone": "90288565",
        "cell": "99738692",
        "id": {
            "name": "CPR",
            "value": "300194-1278"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
        },
        "nat": "DK"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Dale",
            "last": "Bailey"
        },
        "location": {
            "street": {
                "number": 1703,
                "name": "Cork Street"
            },
            "city": "Skerries",
            "state": "Roscommon",
            "country": "Ireland",
            "postcode": 58929,
            "coordinates": {
                "latitude": "44.4602",
                "longitude": "-150.9856"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "dale.bailey@example.com",
        "login": {
            "uuid": "d267e0f6-e00f-404d-99a9-eec5eae333cd",
            "username": "brownfish937",
            "password": "toon",
            "salt": "Ovbi4HAa",
            "md5": "2d5c694f07968481adbbc1025ec84814",
            "sha1": "e421695c6186fada4753fa8bd881aa624a24390b",
            "sha256": "589ea226b9da1e72351f902fab283279dc96e9ff01f7b20a6ef60a28c6291191"
        },
        "dob": {
            "date": "1955-06-06T22:25:06.448Z",
            "age": 67
        },
        "registered": {
            "date": "2005-06-21T09:35:08.171Z",
            "age": 17
        },
        "phone": "061-217-4121",
        "cell": "081-660-7678",
        "id": {
            "name": "PPS",
            "value": "3239815T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/42.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Kuzey",
            "last": "Başoğlu"
        },
        "location": {
            "street": {
                "number": 911,
                "name": "Atatürk Sk"
            },
            "city": "Karabük",
            "state": "Samsun",
            "country": "Turkey",
            "postcode": 31135,
            "coordinates": {
                "latitude": "17.0232",
                "longitude": "-28.2891"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "kuzey.basoglu@example.com",
        "login": {
            "uuid": "30c21dc8-a502-4e86-8e34-e326d32c7141",
            "username": "angryleopard571",
            "password": "moon",
            "salt": "EcqrT5q6",
            "md5": "b698359644d17bd726fff27c30bdb8a2",
            "sha1": "b197db5306d4bb90d8edb4d4e90ef94169624470",
            "sha256": "303f0b26e101af4e4baa0fde4b16602efbd22f5f27e4660ab655a44203ebaa05"
        },
        "dob": {
            "date": "1949-05-29T02:17:52.955Z",
            "age": 73
        },
        "registered": {
            "date": "2008-01-07T13:52:38.966Z",
            "age": 14
        },
        "phone": "(024)-175-6379",
        "cell": "(213)-738-1135",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Montserrat",
            "last": "Jimenez"
        },
        "location": {
            "street": {
                "number": 7860,
                "name": "Avenida de Castilla"
            },
            "city": "Móstoles",
            "state": "Asturias",
            "country": "Spain",
            "postcode": 50570,
            "coordinates": {
                "latitude": "20.8496",
                "longitude": "67.6825"
            },
            "timezone": {
                "offset": "-5:00",
                "description": "Eastern Time (US & Canada), Bogota, Lima"
            }
        },
        "email": "montserrat.jimenez@example.com",
        "login": {
            "uuid": "1cabd546-ed28-4f68-bf10-fa37044be4e9",
            "username": "ticklishduck753",
            "password": "007007",
            "salt": "HINs4aqm",
            "md5": "05852944d679f511a53b6ab22b1aa220",
            "sha1": "923f5d0010ce9c7d3298a3c54fc900d7d3adbb62",
            "sha256": "3f4738802ec07148ba8b5d7c5c688ff57cfe32f1b2fea21e2bcb1f652c637323"
        },
        "dob": {
            "date": "1957-08-27T21:29:59.114Z",
            "age": 65
        },
        "registered": {
            "date": "2005-02-25T11:31:12.150Z",
            "age": 17
        },
        "phone": "902-856-602",
        "cell": "630-993-372",
        "id": {
            "name": "DNI",
            "value": "86643048-A"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/65.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
        },
        "nat": "ES"
    }
];


// 1. Skriv ut alla personers titel, för- och efternman
function person () {
    users.forEach(user => {
        console.log(`${user.name.title} ${user.name.first} ${user.name.last}`)
    });
}
    
// 2. Skriv ut alla personers adress (gatunamn och nummer)
function adress () {
    users.forEach(user => {
        console.log(`${user.location.street.name} ${user.location.street.number}`)
    })
}

// 3. Skriv ut alla användares användarnamn och lösenord i form av:
//     "Username: X, Password: Y" där ni ersätter X och Y med deras användarnamn och lösenord
function user () {
    users.forEach(user => {
        console.log(`Username: ${user.login.username} Password: ${user.login.password}`)
    });
}

// 4. Skriv ut alla personers email som bor i Danmark (detta kräver en if-sats)
function country (country) {
    users.forEach(user => {
        if (user.location.country == country) {
            console.log(user.email)
        } else {
            console.log(user.location.country)
        }
    });
}

// 5. Skriv ut namnet på det land alla personer bor i vars titel (Mr, Miss, osv.)
//    antingen är "Miss" eller "Mr" (detta kräver en if-sats, och kan lösas med eller
//    utan en logisk operator) 
function title () {
    users.forEach(user => {
        if (user.name.title == "Mr" || user.name.title == "Miss") {
            console.log(user.location.country)
        }
    });
}

// 6. Skriv ut alla personers förnamn om deras efternamn börjar med bokstaven "B"
//    (detta kräver en if-sats, nedan finns ett exempel på hur vi kan "hämta" första
//    bokstaven av en sträng)
function firstLetter (letter) {
    users.forEach(user => {
        if (user.name.last[0] == letter) {
            console.log(user.name.first)
        }
    });
}