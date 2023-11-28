// Definizione delle funzioni per le operazioni
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Errore: divisione per zero";
    }
}

// Funzione calcolatrice che accetta due numeri e una callback per l'operazione
function calculator(x, y, operation) {
    return operation(x, y);
}

// Esempi di utilizzo:

var num1 = parseFloat(prompt("Inserisci il primo numero: "));
var num2 = parseFloat(prompt("Inserisci il secondo numero: "));

// Scelta dell'operazione
var choice = prompt("Scegli l'operazione:\n1. Somma\n2. Sottrazione\n3. Moltiplicazione\n4. Divisione");

// Definizione della callback in base alla scelta
var operation;
switch (choice) {
    case '1':
        operation = add;
        break;
    case '2':
        operation = subtract;
        break;
    case '3':
        operation = multiply;
        break;
    case '4':
        operation = divide;
        break;
    default:
        alert("Scelta non valida");
        break;
}

// Esecuzione dell'operazione e stampa del risultato
if (operation) {
    var result = calculator(num1, num2, operation);
    alert("Il risultato dell'operazione è: " + result);
}
