/*
Sistemare la funzione in modo tale che non prendiamo errori in console. 
Inoltre spiegare brevemente come mai al momento la funzione è sbagliata.

function canPlay() {
let sport = " Football";

if (true) {
let personName = "Cosimo";
}

console.log(personName + sport);
}

canPlay();
Indicazioni utili:

fate attenzione allo scope delle variabili
*/

function canPlay() {
    let sport = "Football";
    let personName = "Cosimo"; // Muovi la dichiarazione fuori dal blocco if

    console.log(personName + sport);
}

canPlay();
