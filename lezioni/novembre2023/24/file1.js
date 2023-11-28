/*
funzione che modifichi le parole a cominciare da un modificatore creando il seguente array di parole: 
let arrayDiParole = ['Rocket (89P13)', 'Starlord', 'Gamora', 'Groot', 'Drax']
il risultato deve o farci le parole in UpperCase o LowerCase o dirci il numero di caratteri 
che è compresa in ogni stringa
*/

let arrayDiParole = ['Rocket (89P13)', 'Starlord', 'Gamora', 'Groot', 'Drax'];

// Funzione che modifica le parole in UpperCase
function modificaParoleUpperCase(arrayOriginale) {
  return arrayOriginale.map(parola => parola.toUpperCase());
}

// Funzione che modifica le parole in LowerCase
function modificaParoleLowerCase(arrayOriginale) {
  return arrayOriginale.map(parola => parola.toLowerCase());
}

// Funzione che restituisce il numero di caratteri di ogni parola
function lunghezzaParole(arrayOriginale) {
  return arrayOriginale.map(parola => parola.length);
}

// Esempi di utilizzo delle funzioni
console.log(modificaParoleUpperCase(arrayDiParole));
console.log(modificaParoleLowerCase(arrayDiParole));
console.log(lunghezzaParole(arrayDiParole));

