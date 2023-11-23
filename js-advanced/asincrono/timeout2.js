/*
Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.
let tempoRimanente = 10;

function contoAllaRovescia() {
  //....
}
*/
let tempoRimanente = 10;

function contoAllaRovescia() {
  // Visualizza il messaggio all'inizio
  if (tempoRimanente === 10) {
    console.log("Conto alla rovescia in corso...");
  }

  // Visualizza il tempo rimanente
  console.log(tempoRimanente);

  // Diminuisce il conto alla rovescia di 1 unità
  tempoRimanente--;

  // Quando il conto alla rovescia raggiunge 0, mostra il messaggio di completamento
  if (tempoRimanente < 0) {
    clearInterval(intervalId); // Ferma l'esecuzione di setInterval
    console.log("Conto alla rovescia terminato!");
  }
}

// Chiama la funzione ogni secondo utilizzando setInterval
const intervalId = setInterval(contoAllaRovescia, 1000);
