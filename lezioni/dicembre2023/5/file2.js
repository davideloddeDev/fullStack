/*
una funzione a partire da un array di oggetti di persone ci ritorna le persone che hanno più di 18 anni,
gestire gli errori, ad esempio se non è un array
*/

let people = [
    {
        nome: "Davide",
        cognome: "Lodde",
        email: "davide.lodde@gmail.com",
        age: 30
    },
    {
        nome: "Maria",
        cognome: "Sorrentino",
        email: "maria@outlook.com",
        age: 18
    },
    {
        nome: "",
        cognome: "",
        email: "mauryxp@tim.it",
        age: 15
    }
]

function createUser(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                let userNameArray = array.map((el) => {
                    if (el.nome && el.cognome) {
                        let username = `${el.nome.toLowerCase()}${el.cognome.toLowerCase()}`
                        return {
                            username: username,
                            name: el.nome,
                            surname: el.cognome,
                            age: el.age,
                            email: el.email
                        }
                    } else {
                        let alert = "dati assenti"
                        return {
                            alert: alert,
                            ...el
                        }
                    }
                })

                resolve(userNameArray)
            } reject(new Error("Inserisci dati validi"))

        }, 2000)
    })
}

console.log("sto analizzando i dati ...")

createUser(people)
    .then((data) => {
        data.forEach((element, i) => {
            setTimeout(() => {
                console.log(element)
            }, i * 1000)
        });
    })
    .catch((error) => {
        console.error(error.message)
    })