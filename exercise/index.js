// Detta dataset innehåller två nycklar:
// 
//   1. OWNERS (en ägare kan ha en eller flera husdjur)
//   2. PETS (husdjur)
//
const dataset = {
    OWNERS: [
        {
            "ownerId": 1,
            "firstName": "Angelina",
            "lastName": "Roze",
            "pets": [
                {
                    "animalId": 13,
                    "since": 1996
                }
            ]
        },
        {
            "ownerId": 2,
            "firstName": "Tomas",
            "lastName": "Boyford",
            "pets": [
                {
                    "animalId": 77,
                    "since": 2008
                },
                {
                    "animalId": 18,
                    "since": 2003
                },
                {
                    "animalId": 19,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 3,
            "firstName": "Brooks",
            "lastName": "Turmell",
            "pets": [
                {
                    "animalId": 6,
                    "since": 1991
                },
                {
                    "animalId": 33,
                    "since": 2009
                },
                {
                    "animalId": 46,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 4,
            "firstName": "Desmond",
            "lastName": "Bernucci",
            "pets": [
                {
                    "animalId": 61,
                    "since": 2018
                },
                {
                    "animalId": 70,
                    "since": 2004
                }
            ]
        },
        {
            "ownerId": 5,
            "firstName": "Frederik",
            "lastName": "Muress",
            "pets": [
                {
                    "animalId": 12,
                    "since": 2006
                },
                {
                    "animalId": 4,
                    "since": 2012
                }
            ]
        },
        {
            "ownerId": 6,
            "firstName": "Cordy",
            "lastName": "MacGarvey",
            "pets": [
                {
                    "animalId": 45,
                    "since": 2020
                },
                {
                    "animalId": 29,
                    "since": 2016
                }
            ]
        },
        {
            "ownerId": 7,
            "firstName": "Wyatan",
            "lastName": "Ireland",
            "pets": [
                {
                    "animalId": 2,
                    "since": 2001
                },
                {
                    "animalId": 38,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 8,
            "firstName": "Giles",
            "lastName": "Verrico",
            "pets": [
                {
                    "animalId": 43,
                    "since": 1993
                },
                {
                    "animalId": 48,
                    "since": 2009
                }
            ]
        },
        {
            "ownerId": 9,
            "firstName": "Dody",
            "lastName": "Trevain",
            "pets": [
                {
                    "animalId": 33,
                    "since": 2009
                }
            ]
        },
        {
            "ownerId": 10,
            "firstName": "Reggie",
            "lastName": "Del Checolo",
            "pets": [
                {
                    "animalId": 15,
                    "since": 2019
                },
                {
                    "animalId": 24,
                    "since": 2004
                },
                {
                    "animalId": 61,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 11,
            "firstName": "Ronnie",
            "lastName": "Allardyce",
            "pets": [
                {
                    "animalId": 24,
                    "since": 2021
                }
            ]
        },
        {
            "ownerId": 12,
            "firstName": "Guilbert",
            "lastName": "Esplin",
            "pets": [
                {
                    "animalId": 17,
                    "since": 2006
                },
                {
                    "animalId": 30,
                    "since": 1992
                }
            ]
        },
        {
            "ownerId": 13,
            "firstName": "Blinny",
            "lastName": "McKue",
            "pets": [
                {
                    "animalId": 60,
                    "since": 1990
                },
                {
                    "animalId": 76,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 14,
            "firstName": "Valencia",
            "lastName": "Panons",
            "pets": [
                {
                    "animalId": 52,
                    "since": 1994
                },
                {
                    "animalId": 56,
                    "since": 2014
                }
            ]
        },
        {
            "ownerId": 15,
            "firstName": "Meridel",
            "lastName": "Meletti",
            "pets": [
                {
                    "animalId": 4,
                    "since": 1994
                },
                {
                    "animalId": 19,
                    "since": 2017
                },
                {
                    "animalId": 2,
                    "since": 2004
                }
            ]
        },
        {
            "ownerId": 16,
            "firstName": "Gearard",
            "lastName": "Kiraly",
            "pets": [
                {
                    "animalId": 30,
                    "since": 1995
                }
            ]
        },
        {
            "ownerId": 17,
            "firstName": "Elijah",
            "lastName": "Pennington",
            "pets": [
                {
                    "animalId": 55,
                    "since": 2020
                },
                {
                    "animalId": 57,
                    "since": 2013
                }
            ]
        },
        {
            "ownerId": 18,
            "firstName": "Fey",
            "lastName": "Whittles",
            "pets": [
                {
                    "animalId": 12,
                    "since": 2016
                },
                {
                    "animalId": 62,
                    "since": 1990
                },
                {
                    "animalId": 9,
                    "since": 1995
                }
            ]
        },
        {
            "ownerId": 19,
            "firstName": "Zarla",
            "lastName": "Klimpt",
            "pets": [
                {
                    "animalId": 33,
                    "since": 1990
                }
            ]
        },
        {
            "ownerId": 20,
            "firstName": "Marten",
            "lastName": "Benda",
            "pets": [
                {
                    "animalId": 68,
                    "since": 2021
                },
                {
                    "animalId": 10,
                    "since": 2021
                },
                {
                    "animalId": 38,
                    "since": 1991
                }
            ]
        },
        {
            "ownerId": 21,
            "firstName": "Bonny",
            "lastName": "Godly",
            "pets": [
                {
                    "animalId": 12,
                    "since": 2006
                },
                {
                    "animalId": 42,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 22,
            "firstName": "Kirbie",
            "lastName": "Vodden",
            "pets": [
                {
                    "animalId": 71,
                    "since": 2011
                },
                {
                    "animalId": 75,
                    "since": 2011
                }
            ]
        },
        {
            "ownerId": 23,
            "firstName": "Netti",
            "lastName": "Yusupov",
            "pets": [
                {
                    "animalId": 4,
                    "since": 2002
                },
                {
                    "animalId": 57,
                    "since": 2012
                },
                {
                    "animalId": 67,
                    "since": 2001
                }
            ]
        },
        {
            "ownerId": 24,
            "firstName": "Chrissy",
            "lastName": "Prew",
            "pets": [
                {
                    "animalId": 71,
                    "since": 1995
                },
                {
                    "animalId": 77,
                    "since": 2022
                },
                {
                    "animalId": 31,
                    "since": 2002
                }
            ]
        },
        {
            "ownerId": 25,
            "firstName": "Elaine",
            "lastName": "Lundbeck",
            "pets": [
                {
                    "animalId": 80,
                    "since": 2007
                },
                {
                    "animalId": 53,
                    "since": 1990
                },
                {
                    "animalId": 73,
                    "since": 1991
                }
            ]
        },
        {
            "ownerId": 26,
            "firstName": "Natty",
            "lastName": "Leroux",
            "pets": [
                {
                    "animalId": 64,
                    "since": 2003
                },
                {
                    "animalId": 15,
                    "since": 2005
                }
            ]
        },
        {
            "ownerId": 27,
            "firstName": "Cirillo",
            "lastName": "Sproule",
            "pets": [
                {
                    "animalId": 5,
                    "since": 2018
                }
            ]
        },
        {
            "ownerId": 28,
            "firstName": "Domenico",
            "lastName": "Minkin",
            "pets": [
                {
                    "animalId": 2,
                    "since": 1997
                }
            ]
        },
        {
            "ownerId": 29,
            "firstName": "Dorelle",
            "lastName": "Abrams",
            "pets": [
                {
                    "animalId": 3,
                    "since": 1995
                },
                {
                    "animalId": 27,
                    "since": 1992
                }
            ]
        },
        {
            "ownerId": 30,
            "firstName": "Joyous",
            "lastName": "Stutely",
            "pets": [
                {
                    "animalId": 72,
                    "since": 2020
                },
                {
                    "animalId": 70,
                    "since": 1995
                },
                {
                    "animalId": 11,
                    "since": 2014
                }
            ]
        },
        {
            "ownerId": 31,
            "firstName": "Stanislaw",
            "lastName": "Hounsom",
            "pets": [
                {
                    "animalId": 74,
                    "since": 2012
                },
                {
                    "animalId": 74,
                    "since": 1993
                }
            ]
        },
        {
            "ownerId": 32,
            "firstName": "Vitoria",
            "lastName": "Drew",
            "pets": [
                {
                    "animalId": 16,
                    "since": 2019
                }
            ]
        },
        {
            "ownerId": 33,
            "firstName": "Kristoffer",
            "lastName": "Harkus",
            "pets": [
                {
                    "animalId": 72,
                    "since": 2016
                },
                {
                    "animalId": 56,
                    "since": 2012
                },
                {
                    "animalId": 53,
                    "since": 1999
                }
            ]
        },
        {
            "ownerId": 34,
            "firstName": "Obadiah",
            "lastName": "Sprionghall",
            "pets": [
                {
                    "animalId": 29,
                    "since": 2005
                },
                {
                    "animalId": 15,
                    "since": 2018
                },
                {
                    "animalId": 42,
                    "since": 2000
                }
            ]
        },
        {
            "ownerId": 35,
            "firstName": "Wylma",
            "lastName": "Scogin",
            "pets": [
                {
                    "animalId": 12,
                    "since": 2005
                }
            ]
        },
        {
            "ownerId": 36,
            "firstName": "Maryjo",
            "lastName": "Vanelli",
            "pets": [
                {
                    "animalId": 45,
                    "since": 1990
                },
                {
                    "animalId": 50,
                    "since": 2019
                },
                {
                    "animalId": 67,
                    "since": 1997
                }
            ]
        },
        {
            "ownerId": 37,
            "firstName": "Stefanie",
            "lastName": "Dubble",
            "pets": [
                {
                    "animalId": 67,
                    "since": 2003
                }
            ]
        },
        {
            "ownerId": 38,
            "firstName": "Margery",
            "lastName": "McNeil",
            "pets": [
                {
                    "animalId": 41,
                    "since": 1996
                },
                {
                    "animalId": 11,
                    "since": 2020
                }
            ]
        },
        {
            "ownerId": 39,
            "firstName": "Charline",
            "lastName": "Cunningham",
            "pets": [
                {
                    "animalId": 2,
                    "since": 1999
                },
                {
                    "animalId": 70,
                    "since": 2015
                }
            ]
        },
        {
            "ownerId": 40,
            "firstName": "Timmie",
            "lastName": "Petrelli",
            "pets": [
                {
                    "animalId": 9,
                    "since": 2017
                }
            ]
        }
    ],
    PETS: [
        {
            "animalId": 1,
            "animalType": "Fairy penguin",
            "name": "Méryl",
            "age": 15,
            "weight": 13.5
        },
        {
            "animalId": 2,
            "animalType": "Common nighthawk",
            "name": "Göran",
            "age": 15,
            "weight": 19.2
        },
        {
            "animalId": 3,
            "animalType": "Macaw, blue and yellow",
            "name": "Cunégonde",
            "age": 14,
            "weight": 20.7
        },
        {
            "animalId": 4,
            "animalType": "Ground monitor (unidentified)",
            "name": "Marie-hélène",
            "age": 7,
            "weight": 17.4
        },
        {
            "animalId": 5,
            "animalType": "Cliffchat, mocking",
            "name": "Yáo",
            "age": 5,
            "weight": 9.7
        },
        {
            "animalId": 6,
            "animalType": "Dragon, netted rock",
            "name": "Océanne",
            "age": 9,
            "weight": 18.8
        },
        {
            "animalId": 7,
            "animalType": "Boar, wild",
            "name": "Andrée",
            "age": 10,
            "weight": 19.5
        },
        {
            "animalId": 8,
            "animalType": "Lemur, sportive",
            "name": "Méryl",
            "age": 11,
            "weight": 2.2
        },
        {
            "animalId": 9,
            "animalType": "Cormorant, great",
            "name": "Miléna",
            "age": 8,
            "weight": 14.6
        },
        {
            "animalId": 10,
            "animalType": "Roan antelope",
            "name": "Yú",
            "age": 12,
            "weight": 16.6
        },
        {
            "animalId": 11,
            "animalType": "Macaw, blue and yellow",
            "name": "Torbjörn",
            "age": 18,
            "weight": 7.1
        },
        {
            "animalId": 12,
            "animalType": "Lizard (unidentified)",
            "name": "Mårten",
            "age": 2,
            "weight": 9.5
        },
        {
            "animalId": 13,
            "animalType": "Red sheep",
            "name": "Cunégonde",
            "age": 3,
            "weight": 13.6
        },
        {
            "animalId": 14,
            "animalType": "Colobus, black and white",
            "name": "Noëlla",
            "age": 15,
            "weight": 4.6
        },
        {
            "animalId": 15,
            "animalType": "Buffalo, wild water",
            "name": "Léane",
            "age": 1,
            "weight": 9.4
        },
        {
            "animalId": 16,
            "animalType": "Heron, goliath",
            "name": "Örjan",
            "age": 17,
            "weight": 14.3
        },
        {
            "animalId": 17,
            "animalType": "Lemming, arctic",
            "name": "Mélanie",
            "age": 5,
            "weight": 9.7
        },
        {
            "animalId": 18,
            "animalType": "Meerkat",
            "name": "Personnalisée",
            "age": 12,
            "weight": null
        },
        {
            "animalId": 19,
            "animalType": "Marabou stork",
            "name": "Crééz",
            "age": 7,
            "weight": 18.8
        },
        {
            "animalId": 20,
            "animalType": "Australian sea lion",
            "name": "Médiamass",
            "age": 13,
            "weight": 1.8
        },
        {
            "animalId": 21,
            "animalType": "Eagle owl (unidentified)",
            "name": "Uò",
            "age": 13,
            "weight": 3.0
        },
        {
            "animalId": 22,
            "animalType": "Jackal, silver-backed",
            "name": "Anaé",
            "age": 13,
            "weight": 11.4
        },
        {
            "animalId": 23,
            "animalType": "Southern brown bandicoot",
            "name": "Mélys",
            "age": 6,
            "weight": 6.4
        },
        {
            "animalId": 24,
            "animalType": "Crested bunting",
            "name": "Loïc",
            "age": 1,
            "weight": 13.0
        },
        {
            "animalId": 25,
            "animalType": "Black-crowned night heron",
            "name": "Andréanne",
            "age": 7,
            "weight": 7.9
        },
        {
            "animalId": 26,
            "animalType": "Wolf, mexican",
            "name": "Josée",
            "age": 17,
            "weight": null
        },
        {
            "animalId": 27,
            "animalType": "Flycatcher, tyrant",
            "name": "Adèle",
            "age": 11,
            "weight": 2.3
        },
        {
            "animalId": 28,
            "animalType": "Goose, egyptian",
            "name": "Angèle",
            "age": 12,
            "weight": 17.1
        },
        {
            "animalId": 29,
            "animalType": "Short-beaked echidna",
            "name": "Andréa",
            "age": 12,
            "weight": 17.7
        },
        {
            "animalId": 30,
            "animalType": "Lechwe, kafue flats",
            "name": "Séréna",
            "age": 4,
            "weight": 16.6
        },
        {
            "animalId": 31,
            "animalType": "Australian pelican",
            "name": "Marie-thérèse",
            "age": 17,
            "weight": 13.3
        },
        {
            "animalId": 32,
            "animalType": "Western patch-nosed snake",
            "name": "Léandre",
            "age": 10,
            "weight": 11.7
        },
        {
            "animalId": 33,
            "animalType": "Openbill, asian",
            "name": "Réservés",
            "age": 16,
            "weight": 17.7
        },
        {
            "animalId": 34,
            "animalType": "Yak",
            "name": "Laurélie",
            "age": 4,
            "weight": 2.3
        },
        {
            "animalId": 35,
            "animalType": "Buffalo, asian water",
            "name": "Táng",
            "age": 16,
            "weight": null
        },
        {
            "animalId": 36,
            "animalType": "Cat, ringtail",
            "name": "Lài",
            "age": 3,
            "weight": 13.2
        },
        {
            "animalId": 37,
            "animalType": "Squirrel, uinta ground",
            "name": "Célia",
            "age": 14,
            "weight": 14.8
        },
        {
            "animalId": 38,
            "animalType": "Black-necked stork",
            "name": "Göran",
            "age": 4,
            "weight": 1.6
        },
        {
            "animalId": 39,
            "animalType": "Plover, blacksmith",
            "name": "Méryl",
            "age": 7,
            "weight": 8.0
        },
        {
            "animalId": 40,
            "animalType": "Heron, striated",
            "name": "Yáo",
            "age": 1,
            "weight": 18.7
        },
        {
            "animalId": 41,
            "animalType": "Flying fox (unidentified)",
            "name": "Táng",
            "age": 1,
            "weight": 6.0
        },
        {
            "animalId": 42,
            "animalType": "Mexican wolf",
            "name": "Adèle",
            "age": 9,
            "weight": 13.7
        },
        {
            "animalId": 43,
            "animalType": "Genet, common",
            "name": "Marie-thérèse",
            "age": 6,
            "weight": 9.9
        },
        {
            "animalId": 44,
            "animalType": "Eagle, tawny",
            "name": "Méline",
            "age": 14,
            "weight": 14.3
        },
        {
            "animalId": 45,
            "animalType": "Rhea, common",
            "name": "Ruò",
            "age": 16,
            "weight": 21.5
        },
        {
            "animalId": 46,
            "animalType": "Boat-billed heron",
            "name": "Ruì",
            "age": 1,
            "weight": 14.8
        },
        {
            "animalId": 47,
            "animalType": "Ring dove",
            "name": "Ruì",
            "age": 13,
            "weight": 7.3
        },
        {
            "animalId": 48,
            "animalType": "Dragon, ornate rock",
            "name": "Athéna",
            "age": 11,
            "weight": 23.7
        },
        {
            "animalId": 49,
            "animalType": "Monkey, red howler",
            "name": "Thérèsa",
            "age": 7,
            "weight": 23.2
        },
        {
            "animalId": 50,
            "animalType": "Common turkey",
            "name": "Marie-noël",
            "age": 4,
            "weight": 18.8
        },
        {
            "animalId": 51,
            "animalType": "Pintail, bahama",
            "name": "Céline",
            "age": 7,
            "weight": 16.5
        },
        {
            "animalId": 52,
            "animalType": "Bear, american black",
            "name": "Anaïs",
            "age": 3,
            "weight": 17.9
        },
        {
            "animalId": 53,
            "animalType": "Kangaroo, red",
            "name": "Tú",
            "age": 15,
            "weight": 11.6
        },
        {
            "animalId": 54,
            "animalType": "Long-necked turtle",
            "name": "Pénélope",
            "age": 7,
            "weight": 16.3
        },
        {
            "animalId": 55,
            "animalType": "Dove, mourning collared",
            "name": "Stéphanie",
            "age": 12,
            "weight": 18.2
        },
        {
            "animalId": 56,
            "animalType": "Skimmer, four-spotted",
            "name": "Edmée",
            "age": 1,
            "weight": 14.1
        },
        {
            "animalId": 57,
            "animalType": "Owl, white-browed",
            "name": "Vérane",
            "age": 17,
            "weight": 4.3
        },
        {
            "animalId": 58,
            "animalType": "Porcupine, north american",
            "name": "Lauréna",
            "age": 8,
            "weight": 12.5
        },
        {
            "animalId": 59,
            "animalType": "American woodcock",
            "name": "Séréna",
            "age": 6,
            "weight": 9.3
        },
        {
            "animalId": 60,
            "animalType": "Weaver, white-browed sparrow",
            "name": "Yè",
            "age": 8,
            "weight": 15.8
        },
        {
            "animalId": 61,
            "animalType": "Crab (unidentified)",
            "name": "Réjane",
            "age": 10,
            "weight": 3.0
        },
        {
            "animalId": 62,
            "animalType": "Arctic hare",
            "name": "Stéphanie",
            "age": 14,
            "weight": 7.4
        },
        {
            "animalId": 63,
            "animalType": "Common boubou shrike",
            "name": "Aloïs",
            "age": 1,
            "weight": 2.6
        },
        {
            "animalId": 64,
            "animalType": "Possum, golden brush-tailed",
            "name": "Gaétane",
            "age": 15,
            "weight": 20.5
        },
        {
            "animalId": 65,
            "animalType": "Secretary bird",
            "name": "Maéna",
            "age": 18,
            "weight": 15.2
        },
        {
            "animalId": 66,
            "animalType": "Gambel's quail",
            "name": "Vénus",
            "age": 13,
            "weight": 6.6
        },
        {
            "animalId": 67,
            "animalType": "Jungle kangaroo",
            "name": "Sélène",
            "age": 11,
            "weight": 16.8
        },
        {
            "animalId": 68,
            "animalType": "Egyptian viper",
            "name": "Faîtes",
            "age": 10,
            "weight": 21.4
        },
        {
            "animalId": 69,
            "animalType": "Squirrel, palm",
            "name": "Aimée",
            "age": 10,
            "weight": 1.5
        },
        {
            "animalId": 70,
            "animalType": "Lizard (unidentified)",
            "name": "Angélique",
            "age": 7,
            "weight": 14.4
        },
        {
            "animalId": 71,
            "animalType": "Legaan, Monitor (unidentified)",
            "name": "Adélaïde",
            "age": 3,
            "weight": 15.1
        },
        {
            "animalId": 72,
            "animalType": "Swan, trumpeter",
            "name": "Pénélope",
            "age": 16,
            "weight": 6.2
        },
        {
            "animalId": 73,
            "animalType": "Little grebe",
            "name": "Gaïa",
            "age": 10,
            "weight": 7.9
        },
        {
            "animalId": 74,
            "animalType": "Long-nosed bandicoot",
            "name": "Maëline",
            "age": 16,
            "weight": null
        },
        {
            "animalId": 75,
            "animalType": "Sheep, stone",
            "name": "Maëlla",
            "age": 18,
            "weight": null
        },
        {
            "animalId": 76,
            "animalType": "Blue-footed booby",
            "name": "Östen",
            "age": 15,
            "weight": 19.0
        },
        {
            "animalId": 77,
            "animalType": "Lion, southern sea",
            "name": "Pénélope",
            "age": 3,
            "weight": 7.4
        },
        {
            "animalId": 78,
            "animalType": "Blue peacock",
            "name": "Garçon",
            "age": 17,
            "weight": 11.6
        },
        {
            "animalId": 79,
            "animalType": "Dark-winged trumpeter",
            "name": "Dafnée",
            "age": 15,
            "weight": 19.3
        },
        {
            "animalId": 80,
            "animalType": "Arboral spiny rat",
            "name": "Lèi",
            "age": 17,
            "weight": 6.8
        }
    ],
};

// 1.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla för-
//  och efternamn (sammanslaget i en och samma sträng, t.ex. "Dody Trevain") på de ägare som har exakt 1 husdjur.

function a1 (data) {
    // filtrerar pets efter om pets.pets längd är det samma som 1 och gör en ny array med namn och efternman av ägaren 
    let ownerOfOne = data.OWNERS.filter((pets) => pets.pets.length == 1).map((name => `${name.firstName} ${name.lastName}`))

    console.log(ownerOfOne)
    return ownerOfOne
}

// a1(dataset)


// 2.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla namnen på de tre yngsta husdjuren i hela dataset. 

function a2 (data) {

    // sorterar pets med yngst för och äldts sists. gör en ny array med namnet av dessa djur och gör så vi bara har de tre första som matchar 
    let youngestPets = data.PETS.sort((a, b) => a.age - b.age).map(name => name.name).slice(0, 3)

    console.log(youngestPets)

    return youngestPets

}

// a2(dataset)


// 3.Funktionen ska ta emot dataset och returnera en sträng. 
// Strängen ska innehålla namnet på det husdjur som väger mest (om det finns flera djur som har samma vikt räcker det med att ni tar en av dom).

function a3 (data) {

    // sorterar störrs vikt först och lägst sists. tar ut namnen och gör så att vi bara behåller ddjuret med störst vikt
    let heightWeight = data.PETS.sort((a, b) => b.weight - a.weight).map(weight => weight.name).slice(0, 1)

    console.log(heightWeight.toString());

    return heightWeight.toString();
}

// a3(dataset)

// 4.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla ID:en på de ägare som har fler än 2 husdjur.

function a4 (data) {

    // loppar igen owners där vi ser om ägarna har fler än två djur och gör en array med dessa ägarnas id 
    let idMoreThan2 = data.OWNERS.filter((owner) => {

        let sum = 0; 

        for (let i = 0; i < owner.pets.length; i++) {

            sum = owner.pets.length

            // console.log(sum)
        }

        if (sum > 2 ){
            return owner
        }
    }).map(id => id.ownerId)

    console.log(idMoreThan2)

    return idMoreThan2;

}

// a4(dataset)

// 5.Funktionen ska ta emot dataset och returnera en array. 
// Arrayen ska innehålla namnet på de husdjur som inte har en korrekt vikt (alltså där vikten är null).

function a5 (data) {

    // filtrerar baserat på om djuretns vikt är lika med null och gör en ny array med deras namn 
    let wrongWigth = data.PETS.filter((weight) => weight.weight == null).map(name => name.name)

    console.log(wrongWigth)

    return wrongWigth

}

// a5(dataset)


// 6.Funktionen ska ta emot dataset och en siffra samt returnera en siffra. 
// Funktionen ska returnera antal husdjur den ägare har vars ID är det samma som siffer-argumentet .

function a6 (data, siffra) {

    // filtrerar ägagrnas id baserat på angiven siffra och gör en ny arary av hur många husdjur ägaren har 
    let ownerId = data.OWNERS.filter((owner) => owner.ownerId == siffra).map(pet => pet.pets.length);

    console.log(ownerId)

    return ownerId;

}

// a6(dataset, 2)

// 7.Funktionen ska ta emot dataset och en siffra samt returnera ett objekt.
//  Funktionen ska hämta det husdjur (hela objektet) vars ID är det samma som siffer-argumentet.

function a7 (data, siffra) {

    // filtrerar pets om djur id motsvarar anviget id 
    let petById = data.PETS.filter((pet) => pet.animalId == siffra)

    console.log(petById[0])
    // [FÖR ATT KOMMA åt objektet i stället för arrayen]
    return petById[0]
}

// a7(dataset, 2)   

// 1.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla namnen på de husdjur vars ägare har ID:et 36.

function b1 (data) {
    
    // filtrerar ägaren baserat på ägaren som matchar id 36 
    let owner36 = data.OWNERS.filter((id) => id.ownerId == 36)

    let array = [];

    // loppar igenom owner36 object pets längd 
    for ( let i = 0; i < owner36[0].pets.length; i++) {

        // filtrerar ut om pets id matchar ägare 36 djur lista id och skriver ut namnen 
        let petNames = data.PETS.filter((id) => id.animalId == owner36[0].pets[i].animalId).map(name => name.name)

        array.push(petNames)

    }
    
    console.log(array)
    console.log(owner36)

    return array

}

// b1(dataset)


// 2. Funktionen ska ta emot dataset och en siffra samt returnera en siffra. Funktionen ska räkna ut och returnera den totala vikten
// för en ägares alla husdjur (vilket är den ägare vars ID är det samma som siffer-argumentet).

function b2 (data, siffra) {

    let sum = 0; 
    // filtrerar ägare efter om deras id matchar den angivna siffran
    let owner = data.OWNERS.filter((owner) => owner.ownerId == siffra)

    // loppar igenom ägarens object pets längd
    for ( let i = 0; i < owner[0].pets.length; i++) {

        // filtrerar djuren om djurens id matchar ägarnes animals id 
        let pets = data.PETS.filter((pet) => pet.animalId == owner[0].pets[i].animalId)
        // lägger ihoppa vikten från djuren 
        sum += pets[0].weight 

    }
    
    console.log(sum)
    console.log(owner)
    return sum
}

b2(dataset, 2)

// 3.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla för- och 
// efternamn (sammanslaget i en och samma sträng) på de ägare som har haft minst ett husdjur sedan (since) år 2010.

function b3 (data) {

    // filtrerar ägarna efter om de haft djuret längre en 2010 
   let ownePets = data.OWNERS.filter((owner) => {

    // loppar iigenom pets längd 
    for (let i = 0; i < owner.pets.length; i++) {
        
        // year tar emot år 
        let year = owner.pets[i].since

        // jämförelsen om djuren är för 2010
        if(year <  2010) {

            return year

        }
      console.log(year)
    }  // gör en ny array av ägarens namn och last name 
  }).map(name => `${name.firstName} ${name.lastName}`)

  console.log(ownePets)

  return ownePets
}



b3(dataset)

// 4.Funktionen ska ta emot dataset och returnera en array. Arrayen ska innehålla ID:en på de husdjur vars vikt är mellan 10-15 samt är yngre än 8.

function b4 (data) {

    // filtrerar pets baserat på om derast vikt är mär en 10 och mindre en 15 och har en ålder under 8, gör en ny array med djurens id 
    let pet = data.PETS.filter((pet) => pet.weight > 10 && pet.weight < 15 && pet.age < 8 ).map(id => id.animalId)

    console.log(pet)
}

// b4(dataset)