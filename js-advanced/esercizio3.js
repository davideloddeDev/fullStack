/*
Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.
Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".
function mostraPromemoria() {
  console.log("Promemoria: È ora di fare una pausa!");
}

// .....
*/

function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
  }
  
  console.log("Il promemoria è in fase di impostazione");
  
  // Utilizza setTimeout per ritardare l'esecuzione di mostraPromemoria di 5 secondi
  setTimeout(mostraPromemoria, 5000);
  