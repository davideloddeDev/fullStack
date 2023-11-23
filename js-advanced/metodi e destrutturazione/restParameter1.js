/*
Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.
*/

function somma(...args) {
    return args.reduce((acc, num) => acc + num, 0);
  }
  
  // Esempio di utilizzo della funzione somma
  const risultato = somma(2, 4, 6, 8, 10);
  console.log("La somma è:", risultato);
  