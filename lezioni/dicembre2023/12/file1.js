/*
simula un dataRetrieved
-array di numeri
- se l'array esiste
- processare i dati moltiplicando ogni elemento per 2
- gestire async await
*/

let numbers = [3,7,8,22,10]

function checkArray(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(array.length > 0) {
                resolve(array)
            } else {
                reject(new Error("inserire valori"))
            }
        })
    })
}

function mult(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let moltiplicato = array.map((x) => {
                return x*2
            })
            resolve(`il risultato della moltiplicazione è \n${moltiplicato}`)
        }, 2000)
    })
}

checkArray(numbers)
.then((data) => {
    console.log(data)
    return mult(data)
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error(error.message)
})