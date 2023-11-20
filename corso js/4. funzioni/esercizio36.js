/*
Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale', 
quale definizione possiamo adottare?.

function canPlay() {
let sport = " Football";

if (true) {
let personName = "Cosimo";
}

console.log(personName + sport);
}

canPlay();
Indicazioni utili:

La funzione deve compilare correttamente
*/
let sport; // Variabile globale

function canPlay() {
  sport = "Football"; // Assegnazione della variabile globale

  if (true) {
    globalThis.personName = "Cosimo"; // Assegnazione a globalThis oggetto globale
  }

  console.log(globalThis.personName + sport);
}

canPlay();



