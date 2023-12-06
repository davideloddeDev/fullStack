/*
a partire da un array di oggetti {nome:,email:} che saranno stringhe, vogliamo fare una funzione
asincrona che ci controlli se all'interno dell'array ci sono mail con un determinato dominio.
errori: no array, nome o mail vuoti
*/

let users = [
    {
        nome: "Davide",
        email: "davide.lodde@gmail.com"
    },
    {
        nome: "",
        email: ""
    },
    {
        nome: "Davide Lodde",
        email: "loddeDavide@yahoo.it"
    }
]

function filterUsers(array, domain) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            if (Array.isArray(array)) {
                let filteredArray = array.filter((user) => {
                    if (!user.email) {
                        reject(new Error("Mail dell'utente vuota"))
                    }
                    return user.email.includes(domain)
                    
                })

                resolve(filteredArray)
            } else {
                reject(new Error("fornisci un array prima di continuare"))
            }
        })
    }, 2000)
}

console.log("Sto Processando ...")

filterUsers(users, "gmail.com").then((x) => {
    console.log(x)

}).catch((error) => {
    console.error(`Errore: ${error.message}`)
})