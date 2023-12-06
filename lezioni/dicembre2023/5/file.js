/*
una funzione a partire da un array di oggetti di persone ci ritorna le persone che hanno più di 18 anni,
gestire gli errori, ad esempio se non è un array
*/

let people = [
    {
        nome: "Davide",
        email: "davide.lodde@gmail.com",
        age: 30
    },
    {
        nome: "Maria",
        email: "maria@outlook.com",
        age: 18
    },
    {
        nome: "Maurizio",
        email: "mauryxp@tim.it",
        age: 15
    }
]

function fetchAdults(array) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Array.isArray(array)) {
                let adults = array.filter((item) => {
                    return item.età >= 18
                })
                resolve(adults)
            } else {
                reject("Fornisci un array prima di continuare")
            }
        }, 2000)

    })
}

console.log("sto analizzando i dati ...")
fetchAdults(people)
    .then((x) => {
        console.log(x);
    })
    .catch((error) => {
        console.error(error.message)
    })