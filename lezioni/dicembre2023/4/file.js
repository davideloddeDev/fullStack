/*
creare una funzione che ci restituisce un numero random e se il numero random e maggiore di 5
stampiamo il risultato altrimenti appare un nuovo errore
*/

function number() {
    /*
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numero = Math.floor(Math.random() * 10);
            if (numero > 5) {
                resolve(numero)
            } else {
                reject("Errore: il numero è maggiore di 5")
            }
        }, 2000)

    })
    */

    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let numero = Math.floor(Math.random() * 10);
            if (numero > 5) {
                resolve(numero)
            } else {
                reject("Errore: il numero è maggiore di 5")
            }
        }, 2000)
    })
}

myPromise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.error(`Errore: ${error}`)
    })
