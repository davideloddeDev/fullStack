/*
Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.
function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();
  
  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

//.....
*/

function visualizzaOrologio() {
    const orarioCorrente = new Date();
    let ore = orarioCorrente.getHours();
    let minuti = orarioCorrente.getSeconds();
    let secondi = orarioCorrente.getSeconds();
    
    console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
  }
  
  // Chiamare visualizzaOrologio ogni secondo
  setInterval(visualizzaOrologio, 1000);