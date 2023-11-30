/*
Roulette russa, in maniera random, che dica:
- se devo smettere di studiare
- se fare una pausa
- se continuare a studiare

simuliamo con 2 secondi di attesa,
prima della risposta vogliamo che l'applicazione dica: "vediamo cosa farai oggi"
*/

let scelta = "Vediamo cosa farai oggi";
console.log(scelta);

const possibilità = ["smettere di studiare", "fare una pausa", "continuare a studiare"]

function roulette(array) {
    let indice = Math.floor(Math.random() * array.length);
    console.log(array[indice])
    
}

setTimeout(roulette, 2000, possibilità)