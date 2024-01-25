// Implementare la funzione adultFilter che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.
function adultFilter(persons) {
    // Utilizzo il metodo filter per ottenere solo le persone maggiorenni
    const adults = persons.filter(person => person.age >= 18);
    return adults;
}

const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log("Tutte le persone:", persons);
// Mostra i nomi delle persone maggiorenni
console.log("Nomi delle persone maggiorenni:");
adults.forEach(adult => {
    console.log(adult.name);
});


// https://github.com/davideloddeDev/fullStack/blob/d22aceec7dac576c8515ac0d2932d68a6db12085/js-advanced/esercizio1.js