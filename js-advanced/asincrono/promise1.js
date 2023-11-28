/*
Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
function fetchDataFromAPI() {
  //....
}

fetchDataFromAPI()
*/

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simula un ritardo dell'operazione asincrona con setTimeout
    setTimeout(() => {
      // Simula il recupero dei dati da un'API
      const dataFromAPI = { name: "John", age: 30 };

      // Simula un errore (50% di probabilità di generare un errore)
      const isError = Math.random() < 0.5;

      if (isError) {
        reject("Errore durante il recupero dei dati dall'API");
      } else {
        // Risolve la promise con i dati recuperati
        resolve(dataFromAPI);
      }
    }, 2000); // Ritardo di 2000 millisecondi (2 secondi), puoi impostare il valore in base alle tue esigenze
  });
}

function handleData(data) {
  // Gestisci i dati qui, ad esempio, stampa i dati
  console.log("Dati recuperati:", data);
}

// Chiamata a fetchDataFromAPI con gestione degli errori
fetchDataFromAPI()
  .then(handleData) // Successo: i dati sono passati alla funzione handleData
  .catch((error) => {
    // Errore: gestisci l'errore qui
    console.error("Errore durante il recupero dei dati:", error);
  });
