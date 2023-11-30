/*
Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
 -Utilizzare setTimeout per simulare un'operazione asincrona.
*/

function delayedPromise() {
    return new Promise((resolve) => {
      // Simuliamo l'operazione asincrona con un ritardo di 2 secondi
      setTimeout(() => {
        resolve('Operazione completata dopo 2 secondi');
      }, 2000);
    });
  }
  
  // Utilizziamo la Promise
  delayedPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Si è verificato un errore:', error);
    });
  
