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
    console.log("Sto calcolando il risultato")
    setTimeout(runOperation, 2000)
    let id = setInterval(() => console.log("."), 500)
    setTimeout(() => {
        clearInterval(id)
    }, 1550)
    
    
}

operations("+", 1 , 2 , 3 , 4 , 5)




