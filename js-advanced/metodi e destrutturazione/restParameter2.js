/*
Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.
*/

function filterOutOdds(...args) {
    return args.filter(num => num % 2 === 0);
  }
  
  // Esempio di utilizzo della funzione filterOutOdds
  const numeriPari = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log("Numeri pari:", numeriPari);