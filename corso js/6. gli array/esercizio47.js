/*
Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Rimuovere il nome "Giovanni" dal nostro array
Aggiungere il nome "Pippo" alla coda del nostro array
Aggiungere il nome "Giovanni" come primo elemento del nostro array
Dopo ogni operazione inserire il console.log() del nostro array names
*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Rimuovere il nome "Giovanni" dall'array
const indexToRemove = names.indexOf("Giovanni");
if (indexToRemove > -1) {
    names.splice(indexToRemove, 1);
}
console.log("Array dopo la rimozione di 'Giovanni':", names);

// Aggiungere il nome "Pippo" alla coda dell'array
names.push("Pippo");
console.log("Array dopo l'aggiunta di 'Pippo':", names);

// Aggiungere il nome "Giovanni" come primo elemento dell'array
names.unshift("Giovanni");
console.log("Array dopo l'aggiunta di 'Giovanni' come primo elemento:", names);
