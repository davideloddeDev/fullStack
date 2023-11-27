/*
Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti.
-La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.
function filterArray(arr, callback) {
 //...
}

function isEven(num) {
 //.....
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]
*/

function filterArray(arr, callback) {
    // Creare un nuovo array per immagazzinare gli elementi filtrati
    const filteredArray = [];
  
    // Iterare attraverso ciascun elemento dell'array
    for (let i = 0; i < arr.length; i++) {
      // Applicare la funzione di callback a ciascun elemento
      // e aggiungere l'elemento all'array filtrato solo se la callback restituisce true
      if (callback(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
  
    // Restituire il nuovo array con gli elementi filtrati
    return filteredArray;
  }
  
  function isEven(num) {
    // Restituire true se il numero è pari, altrimenti false
    return num % 2 === 0;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterArray(numbers, isEven);
  console.log(evenNumbers); // Dovrebbe stampare [2, 4, 6]
  