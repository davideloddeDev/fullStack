/*
Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.
function fetchDataFromAPI(callback) {
  //....
}

function handleData(data) {
  //....
}

fetchDataFromAPI(handleData);
*/

function fetchDataFromAPI(callback) {
    // Simula un ritardo dell'operazione asincrona con setTimeout
    setTimeout(function () {
      // Simula il recupero dei dati da un'API
      const dataFromAPI = { name: "John", age: 30 };
  
      // Passa i dati alla funzione di callback
      callback(dataFromAPI);
    }, 2000); // Ritardo di 2000 millisecondi (2 secondi), puoi impostare il valore in base alle tue esigenze
  }
  
  function handleData(data) {
    // Gestisci i dati qui, ad esempio, stampa i dati
    console.log("Dati recuperati:", data);
  }
  
  // Chiamata a fetchDataFromAPI con handleData come callback
  fetchDataFromAPI(handleData);
  