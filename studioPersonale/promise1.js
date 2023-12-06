/*
anni di esperienza
*/

let crescita = [
    {
        name: "Davide",
        surname: "Lodde",
        year: 2023
    },
    {
        name: "Roberto",
        surname: "Lai",
        year: 2021
    },
    {
        name: "Nicola",
        surname: "Atzori",
        year: 2019
    }
]

function esperienza(array) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array)) {
            let exp = array.filter((x) => {
                return x.year > 2020
            })

            resolve(exp)

        } reject(new Error("non hai fornito un array valido"))
    })
}

console.log("sto analizzando i dati")

esperienza(crescita)
    .then((z) => {
        console.log(z)
    })
    .catch((error) => {
        console.error(error.message)
    })