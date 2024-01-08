/*
Abbiamo bisogno di scrivere un array di nome students, questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente
Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array
*/

const students = [
    {
        id: 1,
        name: "Marco",
        surname: "Rossi",
        age: 20
    },
    {
        id: 2,
        name: "Giulia",
        surname: "Bianchi",
        age: 22
    },
    {
        id: 3,
        name: "Luca",
        surname: "Verdi",
        age: 21
    }
];

// Stampare le informazioni del primo studente
const primoStudente = students[0];
console.log("Informazioni del primo studente:");
console.log("ID:", primoStudente.id);
console.log("Nome:", primoStudente.name);
console.log("Cognome:", primoStudente.surname);
console.log("Età:", primoStudente.age);
