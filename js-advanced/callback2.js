/*
Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo temporale in millisecondi come argomenti.
delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.
function delay(callback, delayTime) {
 //....
}
function sayHi() {
  console.log("Hi, there!");
}
delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.
*/
function delay(callback, delayTime) {
    // Utilizza la funzione setTimeout per ritardare l'esecuzione della callback
    setTimeout(callback, delayTime);
  }
  
  function sayHi() {
    console.log("Hi, there!");
  }
  
  // Chiamata a delay con sayHi come callback e un ritardo di 2000 millisecondi (2 secondi)
  delay(sayHi, 2000); // Dovrebbe stampare "Hi, there!" dopo un ritardo di 2 secondi
  