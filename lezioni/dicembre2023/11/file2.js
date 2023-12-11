/*
funzione come parametri che prende come parametri una quantità indefinita di numeri
la seconda funzione restituisce il prodotto della moltiplicazione dei numeri
*/

function number(callback, ...array) {
    return array.reduce((acc, num) => {
        if (array.includes(0)) {
            console.log("il numero sarà sempre 0")
        } else {
            return callback(acc, num)
        }
        
    })
}

function result(num1, num2) {
    return num1 * num2
}


console.log(number(result, 1,2,3,4,5))