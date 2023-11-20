/*
Abbiamo il nostro array di studenti, vogliamo rimuovere lo studente Giovanni ed aggiungere il seguente studente:

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
{ id: 3, name: "Francesco", surname: "Verdi", age: 41 } Sapresti fare questa operazione?

Dopo ogni operazione inserire il console.log() del nostro array students
*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// Trova l'indice dello studente "Giovanni"
const indexToRemove = students.findIndex(student => student.name === "Giovanni");

if (indexToRemove !== -1) {
    // Rimuovi lo studente "Giovanni" dall'array
    students.splice(indexToRemove, 1);
    console.log("Array dopo la rimozione di 'Giovanni':", students);
} else {
    console.log("Lo studente 'Giovanni' non è stato trovato nell'array.");
}

// Aggiungi il nuovo studente "Francesco" all'array
const newStudent = { id: 4, name: "Francesco", surname: "Verdi", age: 41 };
students.push(newStudent);
console.log("Array dopo l'aggiunta di 'Francesco':", students);
