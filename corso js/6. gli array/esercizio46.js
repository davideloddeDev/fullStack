/*
Partendo dall'esercizio precedente, tramite un ciclo for, dobbiamo stampare tutti gli elementi contenuti nel nostro array

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log("Informazioni dello studente", i + 1);
    console.log("ID:", student.id);
    console.log("Nome:", student.name);
    console.log("Cognome:", student.surname);
    console.log("Età:", student.age);
    if (student.id < 3){
        console.log("----------------------------");
    }
    
}
