/*
In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono
e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare
i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale"
*/

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
      // Simuliamo un caricamento del modulo (ad esempio, da un server)
      setTimeout(() => {
          // Simuliamo un errore casuale con una probabilità del 20%
          if (Math.random() < 0.2) {
              reject(`Errore durante il caricamento del modulo ${modulo}`);
          } else {
              resolve(`Il modulo ${modulo} è stato caricato.`);
          }
      }, 2000);
  });
}

async function lanciaVeicoloSpaziale(...moduli) {
  for (const modulo of moduli) {
      try {
          const risultato = await caricaModulo(modulo);
          console.log(risultato);
      } catch (error) {
          console.error(error);
          // Puoi decidere se interrompere il caricamento in caso di errore o continuare con i moduli successivi
      }
  }
}

// Esempio di utilizzo
async function caricaModuliSequenziale() {
  await lanciaVeicoloSpaziale("A");
  await lanciaVeicoloSpaziale("B");
  await lanciaVeicoloSpaziale("C");
}

caricaModuliSequenziale();


