/*
Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Stampare il primo valore
Stampare l'ultimo valore
Stampare la lunghezza dell'array
Indicare il risultato se proviamo a stampare il 20esimo valore ed il perché
Indicazioni utili:

Stampare sul terminale la lista precedente con una serie di console.log()
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Stampa del primo valore
console.log("Primo valore:", numbers[0]);

// Stampa dell'ultimo valore
console.log("Ultimo valore:", numbers[numbers.length - 1]);

// Stampa della lunghezza dell'array
console.log("Lunghezza dell'array:", numbers.length);

// Tentativo di stampare il 20esimo valore e spiegazione
console.log("Tentativo di stampare il 20esimo valore:", numbers[19]);
console.log("Spiegazione: L'array contiene solo 10 elementi, quindi numbers[19] non esiste. Provare ad accedere a un indice oltre la lunghezza dell'array restituirà 'undefined'.");
