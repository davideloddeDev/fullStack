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