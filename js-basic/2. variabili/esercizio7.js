/*
Esegui la conversione (casting) delle variabili al tipo di dato presente nei commmenti del file exercise.js e stampa il risultato dell'operazione.
Spiega il casting della variabile hello
let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string
*/

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

// Esegui la conversione delle variabili
hello = Number(hello); // La variabile "hello" viene convertita in un numero.
age = Boolean(age); // La variabile "age" viene convertita in un booleano.
isGraduated = String(isGraduated); // La variabile "isGraduated" viene convertita in una stringa.

// Stampa il risultato dell'operazione
console.log(hello, typeof hello);
console.log(age, typeof age);
console.log(isGraduated, typeof isGraduated);
