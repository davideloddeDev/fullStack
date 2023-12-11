/*
parto con array di oggetti
vogliamo restituire con una funzione gli utenti maggiorenni
con una seconda funzione vogliamo creare username creato
da una combinazione di nome, cognome separato da un punto tutto in lowercase
*/
const persons = [
    {
        id: 1,
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 25
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Verdi',
        age: 32
    },
    {
        id: 3,
        firstName: 'Giovanni',
        lastName: 'Rossi',
        age: 15
    }
];

/*function utentiMaggiorenni(array) {
    return array.filter(person => {
        return person.age >= 18
    })
}*/

let utentiMaggiorenni = (array) => { return array.filter(person => person.age >= 18) }

function addUsername(array) {
    return array.map((person) => {
        return {
            ...person,
            username: `${person.firstName}.${person.lastName}`.toLowerCase(),
        }
    })

}

console.log(utentiMaggiorenni(persons))
console.log(addUsername(persons))

