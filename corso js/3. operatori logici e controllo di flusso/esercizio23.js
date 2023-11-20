/*
 Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo
in base alle seguenti tariffe:
Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€
*/

const tariffa = "HB"; // Puoi modificare la tariffa in base alle tue esigenze

switch (tariffa) {
  case "BB":
    console.log("Il prezzo della camera d'albergo è di 50€.");
    break;
  case "HB":
    console.log("Il prezzo della camera d'albergo è di 80€.");
    break;
  case "FB":
    console.log("Il prezzo della camera d'albergo è di 100€.");
    break;
  default:
    console.log("Tariffa non valida. Si prega di specificare una tariffa valida.");
}

  