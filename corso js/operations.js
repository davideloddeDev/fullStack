
// dichiarazione costanti

const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

// verifica su console
console.log(question1 < question2) //the result must be true
console.log(question1 > question2) //the result must be false
console.log(question3 != question2) //the result must be true
console.log(question4 != question4) //the result must be false
console.log(question2 != question4) //the result must be false


/*
    Istanzia le variabili booleane isSunnyDay e isHomeworkCompleted e assegna loro un valore.
Tramite l'operatore ternario stampa in console la stringa Jesse can goes out to play se entrambe
 le variabili sono true, in caso contrario stampa Jesse stays home
*/

let isSunnyDay = true; // Puoi assegnare true o false a questa variabile
let isHomeworkCompleted = true; // Puoi assegnare true o false a questa variabile

console.log(isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play" : "Jesse stays home");

isSunnyDay = false;
isHomeworkCompleted = true;

console.log(isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play" : "Jesse stays home");

var password = "passwordText";  

if (password.length >= 4 && password.length <= 6) {
    console.log("La lunghezza della password è corretta.");
} else {
    console.log("La password non è valida.");
}


password = "testp";  

if (password.length >= 4 && password.length <= 6) {
    console.log("La lunghezza della password è corretta.");
} else {
    console.log("La password non è valida.");
}


