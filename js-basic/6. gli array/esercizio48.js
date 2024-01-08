/*
Abbiamo il nostro array di nomi, questa volta vogliamo stampare i nostri nomi in modo diverso, dopo ogni nome deve esserci un trattino al posto della virgola, sapresti risolvere questo problema?

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Utilizzare il metodo join per unire i nomi con trattini
const formattedNames = names.join(" - ");
console.log(formattedNames);
