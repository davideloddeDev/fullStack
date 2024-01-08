/*
Esegui la conversione (casting) delle variabili al tipo di dato presente nei commenti del file exercise.js e stampa il risultato dell'operazione.
let hello = 'Ciao'; //boolean 
let age = 18; //string
let isGraduated = false; //number
*/

let hello = 'Ciao'; //string
let age = 18; //number
let isGraduated = false; //boolean

// Esegui la conversione delle variabili
hello = Boolean(hello);
age = String(age);
isGraduated = Number(isGraduated);

// Stampa il risultato dell'operazione
console.log(hello, typeof hello);
console.log(age, typeof age);
console.log(isGraduated, typeof isGraduated);
