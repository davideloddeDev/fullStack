/*
Modifica il costrutto if creato nell'esercizio 20, trasformandolo in un costrutto switch
*/

let myVariable = 42; // Puoi assegnare un valore numerico, stringa o booleano a questa variabile

let variableType;

switch (typeof myVariable) {
  case "number":
    variableType = "Numero";
    break;
  case "string":
    variableType = "Stringa";
    break;
  case "boolean":
    variableType = "Booleano";
    break;
  default:
    variableType = "Tipo sconosciuto";
    break;
}

console.log("Il tipo della variabile è: " + variableType);
