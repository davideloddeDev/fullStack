/*
Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.
function doubleArray(arr, callback) {
    //....
  }
  function doubleValue(num) {
    return num * 2;
  }
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, doubleValue);
  console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]
*/

function doubleArray(arr, callback) {
    // Creare un nuovo array per immagazzinare i valori trasformati
    const resultArray = [];
  
    // Iterare attraverso ciascun elemento dell'array
    for (let i = 0; i < arr.length; i++) {
      // Applicare la funzione di callback a ciascun elemento e aggiungere il risultato al nuovo array
      resultArray.push(callback(arr[i]));
    }
  
    // Restituire il nuovo array con i valori trasformati
    return resultArray;
  }
  
  function doubleValue(num) {
    return num * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, doubleValue);
  console.log(doubledNumbers); // Dovrebbe stampare [2, 4, 6, 8, 10]
  