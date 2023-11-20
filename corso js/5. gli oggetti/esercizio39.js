/*
Nel nostro file di partenza, troviamo un oggetto user che presenta le proprietà name e age. Adesso, se vogliamo creare un nuovo utente partendo da user, e dopo proviamo a modificarne il nome, come vedrete dai console.log(), andremo a modificare anche l'oggetto di partenza. Sapresti modificare il name di newUser, senza cambiare quello di user?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
*/

const user = {
    name: "Cosimo",
    age: 30
};

let newUser = {};

for (let prop in user) {
    newUser[prop] = user[prop];
}

newUser.name = "Paolo"; // Modifica del name di newUser

console.log(newUser); // Stampa il nuovo utente
console.log(user); // Stampa l'utente originale (non modificato)