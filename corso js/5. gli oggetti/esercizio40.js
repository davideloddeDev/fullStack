// Partendo dall'esercizio precedente, conosci altri modi per copiare l'oggetto user senza modificare le sue proprietà?

let user = {
    name: "Cosimo",
    age: 30
};

let newUser = { ...user }; // Creazione di una copia separata di user


newUser.name = "Paolo"; // Modifica del name di newUser

console.log(newUser); // Stampa il nuovo utente
console.log(user); // Stampa l'utente originale (non modificato)

