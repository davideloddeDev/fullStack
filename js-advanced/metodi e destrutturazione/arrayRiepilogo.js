/*
In questo esercizio dato un array di studenti:
Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];
*/

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// Utilizza forEach per stampare i nomi degli studenti
console.log("Nomi degli studenti:");
studenti.forEach(studente => {
  console.log(studente.nome);
});

// Utilizza find per trovare uno studente con un voto superiore a 90
const studenteConVotoSuperioreA90 = studenti.find(studente => studente.voto > 90);
console.log("\nStudente con voto superiore a 90:", studenteConVotoSuperioreA90);

// Utilizza reduce per calcolare la media dei voti degli studenti
const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log("\nMedia dei voti degli studenti:", mediaVoti);

// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo
const nomiMaiuscoli = studenti.map(studente => studente.nome.toUpperCase());
console.log("\nNomi degli studenti in maiuscolo:", nomiMaiuscoli);

// Utilizza filter per trovare gli studenti con voti superiori a 85
const studentiConVotiSuperioriA85 = studenti.filter(studente => studente.voto > 85);
console.log("\nStudenti con voti superiori a 85:", studentiConVotiSuperioriA85);
