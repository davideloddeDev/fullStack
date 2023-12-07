/*
array di oggetti con utenti nome, età al terzo deve mancare l'età
aggiungere l'età in maniera random
*/

const usersData = [
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 30
    },
    {
        name: "Charlie",

    },
    {
        name: "Diana",
        age: 20
    },
]

function checkAge(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                const newUsers = array.map((user) => {
                    if (!user.age) {
                        let etaRandom = Math.floor(Math.random() * 100)
                        return {
                            name: user.name,
                            age: etaRandom
                        }

                    }
                    return user
                })

                resolve(newUsers)
            } else {
                reject(new Error(`Errore Array not available`))
            }
        }, 2000)


    })
}

async function processingData(arr) {
    try {
        const a = await checkAge(arr)
        console.log(a)
    } catch (error) {
        console.error(error.message)
    }
}
let x
processingData(x)