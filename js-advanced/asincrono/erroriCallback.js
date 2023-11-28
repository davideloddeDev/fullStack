/*
Partendo da questo codice:
function performOperation(a, b, callback) {
    const result = a + b; // Puoi sostituire questa operazione con qualsiasi operazione matematica desiderata
    callback(result); // Passa il risultato alla funzione di callback
  }
  
  function displayResult(result) {
    console.log("Il risultato dell'operazione è:", result);
  }
  
  // Esempio di utilizzo: esegue l'operazione 5 + 3 e visualizza il risultato
  performOperation(5, 3, displayResult);
  
includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.
function performOperation(a, b, callback) {
 //.....
}

function displayResult(result) {
   //....
}

performOperation(5, 3, displayResult);
*/

function performOperation(a, b, callback) {
    try {
        const result = a + b; // Puoi sostituire questa operazione con qualsiasi operazione matematica desiderata
        callback(null, result); // Passa il risultato alla funzione di callback senza errori
    } catch (error) {
        callback(error, null); // Se si verifica un errore, passa l'errore alla funzione di callback
    }
}

function displayResult(error, result) {
    if (error) {
        console.error("Si è verificato un errore:", error.message);
    } else {
        console.log("Il risultato dell'operazione è:", result);
    }
}

// Esempio di utilizzo: esegue l'operazione 5 + 3 e visualizza il risultato
performOperation(5, 3, displayResult);
