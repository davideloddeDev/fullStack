/*
le prime 2 funzioni in caso di successo ritornano un console.log
controllo delle promises con api
*/



function fun1(number) {
    const success = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                return console.log("Successo funzione 1")
                resolve()
            } else {
                reject("Error")
            }
        }, 2000)

    })
}

function fun2(number) {
    return new Promise((resolve, reject) => {
        const success = false
        setTimeout(() => {
            if (success) {
                return console.log("Successo funzione 2")
                resolve()
            } else {
                reject("Error")
            }
        }, 2000)

    })
}

Promise.all([fun1(), fun2()])
    .then((x) => {
        console.log(x)
    })
    .catch((error) => {
        console.error(error)
    })

