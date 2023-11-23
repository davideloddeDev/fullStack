/*
fare una calcolatrice operazione tra tra un array di numeri
che tipo di operazione quando viene svolta la funzione
- funzione che contiene una funzione
- impostare il setTimeout
*/

function eseguiOperazione(arrayNumeri, operazione) {
    // Funzione esterna per eseguire l'operazione
    function calcolatrice(operazione) {
        switch (operazione) {
            case "addizione":
                return (acc, numero) => acc + numero;
            case "sottrazione":
                return (acc, numero, index) => (index === 0 ? numero : acc - numero);
            case "moltiplicazione":
                return (acc, numero) => acc * numero;
            case "divisione":
                return (acc, numero, index) => (index === 0 ? numero : acc / numero);
            default:
                console.log("Operazione non supportata");
                return null;
        }
    }

    // Ottenere la funzione di calcolatrice in base all'operazione
    const operazioneSelezionata = calcolatrice(operazione);

    if (!operazioneSelezionata) {
        return;
    }

    // Eseguire l'operazione con ritardo di tempo
    let risultato = 0;
    arrayNumeri.forEach((numero, index) => {
        setTimeout(() => {
            risultato = operazioneSelezionata(risultato, numero, index);
            console.log(`Passaggio ${index + 1}: ${risultato}`);
        }, index * 1000); // Ritardo di 1 secondo tra ciascuna operazione
    });
}

// Esempio di utilizzo
const numeri = [2, 4, 6, 8];
eseguiOperazione(numeri, "addizione");
