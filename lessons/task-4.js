const starWarCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        films: ["2", "6", "3", "1", "7"],
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: 'gold',
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        films: ["1", "2", "3", "4", "5", "6"],
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "белый",
        birth_year: "19BBY",
        gender: "female",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        films: ["1", "2", "3", "4", "5", "6"],
    },
];

//1.
const gendersArray = starWarCharacters.map(сharacter => сharacter.gender);
console.log(gendersArray);

//2.
let charactersArray = [];
starWarCharacters.forEach(actor => {
    charactersArray.push(actor.films.length);
})

let max = Math.max.apply(Math, charactersArray);

let charactersWithTheMostFilms = starWarCharacters
    .filter(character => character.films.length === max)
    .map(character => {
        return character.name;
    })
console.log(charactersWithTheMostFilms.join(','));


//3.
if (starWarCharacters.length > 0) {
    let theHeaviestCharacter = starWarCharacters[0];
    starWarCharacters.filter(character => {
        if (parseFloat(character.mass) > parseFloat(theHeaviestCharacter.mass)) {
            theHeaviestCharacter = character;
        }
    })
    console.log(theHeaviestCharacter.name);
}

//4.
let films = [];
let result = [];
starWarCharacters.forEach(character => {
    films = films.concat(character.films);
})

let filmHasAllCharacters = null;
films.forEach(valueFilm => {
    filmHasAllCharacters = true;
    starWarCharacters.forEach(character => {
        if (!character.films.includes(valueFilm)) {
            filmHasAllCharacters = false;
        }
    })
    if (filmHasAllCharacters) {
        if (!result.includes(valueFilm)) {
            result.push(valueFilm)
        }
    }
})
console.log(result.join(','));


//5.
starWarCharacters.length = 0;
console.log(starWarCharacters);