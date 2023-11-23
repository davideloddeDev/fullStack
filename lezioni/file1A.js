/*
fare una calcolatrice operazione tra tra un array di numeri
che tipo di operazione quando viene svolta la funzione
- funzione che contiene una funzione
- impostare il setTimeout
*/

function operations(operator, ...numbers) {
    function runOperation() {

        let result;

        if (operator == '+') {
            result = numbers.reduce((a, number) => a + number, 0);

        } else if (operator == '-') {
            result = numbers.reduce((a, number) => a - number, 0);
        }else if (operator == '*') {
            result = numbers.reduce((a, number) => a * number, 1);
        } else if (operator == '/') {
            if (numbers.some(n => n == 0)) {
                console.log("Impossibile dividere per 0");
            } else {
                result = numbers.reduce((a, number) => a / number);
            }
        }
        else {
            console.log("Errore: operazione Impossibile")
        }

        console.log(`il risultato è: ${result}`)


    }
    runOperation();
}
let somma = operations("+", 2,5,7,9)
let sottrazione = operations("-", 2,5,7,9)
let moltiplicazione = operations("*", 2,5,7,9)
let divisione = operations("/", 2,5,7,9)

console.log(`somma: ${somma}; sottrazione: ${sottrazione}; moltiplicazione: ${moltiplicazione}; divisione: ${divisione}`);

