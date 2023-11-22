/*
Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
function runCallbacks(callbacks) {
  //....
}
function firstCallback() {
  //...
}
function secondCallback() {
  //...
}

function thirdCallback() {
  //...
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
*/

function runCallbacks(callbacks) {
    // Itera attraverso ogni callback nell'array e eseguila
    for (let i = 0; i < callbacks.length; i++) {
      callbacks[i](); // Esegui la callback corrente
    }
  }
  
  function firstCallback() {
    console.log("Prima callback eseguita");
  }
  
  function secondCallback() {
    console.log("Seconda callback eseguita");
  }
  
  function thirdCallback() {
    console.log("Terza callback eseguita");
  }
  
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);
  