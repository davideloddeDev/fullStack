/*
scriviamo una calcolatrice, funzione calcolatrice all'interno scrivi il codice dicendo data una determinata callback operazione fai le operazioni
*/

function calculator(operatore, ...array) {
    const risultato = operatore(...array);
    return risultato
}

function somma(...array) {
    return array.reduce((acc, num) => {
        return acc + num
    })


}

function sottrazione(...array) {
    return array.reduce((acc, num) => acc - num)
}

function moltiplicazione(...array) {
    if (array.includes(0)){
        return "il risultato è 0"
    } else {
        return array.reduce((acc, num) => acc * num)
    }
    
}

function divisione(...array) {
    if (array.includes(0)){
        return "Impossibile dividere per 0"
    } else {
        return array.reduce((acc, num) => acc / num)
    }
}

const arrayNumeri = [1,5,6,8]
let risultato = calculator(somma, ...arrayNumeri)
//setTimeout(() => console.log(risultato), 2000)
let id = setInterval(() => console.log(risultato), 500)

setTimeout(() => {
    clearInterval(id)
}, 1550)








