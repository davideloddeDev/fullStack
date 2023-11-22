/*
Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.
function performOperation(a, b, callback) {
  //...
}

function displayResult(result) {
  //....
}

performOperation(5, 3, displayResult);
*/

function performOperation(a, b, callback) {
    const result = a + b; // Puoi sostituire questa operazione con qualsiasi operazione matematica desiderata
    callback(result); // Passa il risultato alla funzione di callback
  }
  
  function displayResult(result) {
    console.log("Il risultato dell'operazione è:", result);
  }
  
  // Esempio di utilizzo: esegue l'operazione 5 + 3 e visualizza il risultato
  performOperation(5, 3, displayResult);
  