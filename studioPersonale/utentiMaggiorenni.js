/*
1. parto con array di oggetti 
2. vogliamo restituire con una funzione gli utenti maggiorenni
3. con una seconda funzione vogliamo creare username creato 
da una combinazione di nome, cognome separato da un punto tutto in lowercase
*/

const users = [
    {
        id: 1,
        name: "Mario",
        surname: "Loi",
        age: 17
    },
    {
        id: 2,
        name: "Giuseppe",
        surname: "Loddo",
        age: 22
    },
    {
        id: 3,
        name: "Mauro",
        surname: "Olla",
        age: 27
    }
]

let majorUsers = (array) => {
    return array.filter((user) => {
        return user.age >= 18
    })
}

function username(array) {
    return array.map((user) => {
        return {
            ...user,
            username: `${user.name}.${user.surname}`.toLowerCase()
        }
    })
}

console.log(majorUsers(users))
console.log(username(users))

