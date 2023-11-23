/*
Dato un oggetto person con le proprietà nome ed età, utilizza la destrutturazione dell'oggetto per creare variabili nome ed età che contengano i valori dell'oggetto.
const person = { name: "Alice", age: 30 };
*/

const person = { name: "Alice", age: 30 };

// Destrutturazione dell'oggetto
const { name, age } = person;

// Utilizzo delle variabili
console.log("Nome:", name);
console.log("Età:", age);
