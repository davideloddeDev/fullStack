/*
una funzione a partire da un array di oggetti di persone ci ritorna le persone che hanno più di 18 anni,
gestire gli errori, ad esempio se non è un array
*/

let obj = [
    {
        name: "Davide",
        surname: "Lodde",
        age: 30
    },
    {
        name: "Romina",
        surname: "Olla",
        age: 20
    },
    {
        name: "Viky",
        surname: "Terrana",
        age: 10
    },
];

function fetchAge(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                let adults = array.filter((person) => {
                    return person.age >= 18
                });
                resolve(adults);
            } else {
                reject(new Error("Non è stato fornito un array di oggetti."));
            }
        }, 2000);
    });
}

console.log("Sto analizzando i dati forniti");
fetchAge(obj)
    .then((adults) => {
        console.log("Le persone con più di 18 anni sono:", adults);
    })
    .catch((error) => {
        console.error(error.message);
    });
