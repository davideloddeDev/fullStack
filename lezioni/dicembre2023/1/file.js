/*
a partire da un array di oggetti che hanno come coppia chiave:valore id,nome,prezzo e sconto
ci calcoli il nuovo prezzo scontato e dobbiamo stampare i nostri oggetti 
a intervalli di un secondo
come calcolare lo sconto: prezzo intero per sconto diviso 100. Prezzo intero meno risultato
*/

let prodottiApple = [
    { id: 1, nome: 'iPhone 15 Pro Max', prezzo: 1699, sconto: 20 },
    { id: 2, nome: 'iPad Pro 13', prezzo: 1499, sconto: 20 },
    { id: 3, nome: 'MacBook Air m2', prezzo: 1369, sconto: 10 },
    { id: 4, nome: 'MacBook Air m1', prezzo: 1099, sconto: 10 },
    { id: 5, nome: 'AirPods Pro (2nd gen)', prezzo: 299, sconto: 30 },
    { id: 6, nome: 'MacBook Air m2', prezzo: 1369, sconto: 10 },
];

const capiAbbigliamento = [
    { id: 1, nome: 'Maglia', prezzo: 30, sconto: 10 },
    { id: 2, nome: 'Pantaloni', prezzo: 50, sconto: 20 },
    { id: 3, nome: 'Giacca', prezzo: 100, sconto: 15 },
];

function calcolaSconto(array, callback) {
    console.log("sto calcolando lo sconto");

    if (!Array.isArray(array)) {
        callback(new Error("Non è un array"), null);
    } else {
        const itemAggiornati = array.map((item) => {
            if (typeof item.prezzo === "number" && typeof item.sconto === "number") {
                const scontoApplicato = (item.prezzo * item.sconto) / 100;
                const nuovoPrezzo = item.prezzo - scontoApplicato;
                return {
                    id: item.id,
                    nome: item.nome,
                    prezzoApplicato: nuovoPrezzo,
                    scontoApplicato: item.sconto,
                };
            } else {
                console.log(`L'oggetto con ID ${item.id} non contiene numeri per il calcolo dello sconto.`);
                return null; // Restituisci null per segnalare che l'oggetto non può essere aggiornato
            }
        });

        // Filtra gli elementi null prima di passarli al callback
        const elementiValidi = itemAggiornati.filter((item) => item !== null);

        callback(null, elementiValidi);

        elementiValidi.forEach((item, i) => {
            setTimeout(() => {
                console.log(`Nome Prodotto = ${item.nome}; Prezzo = ${item.prezzoApplicato}; Percentuale sconto: ${item.scontoApplicato}%`);
            }, i * 1000); // Aggiungi uno spostamento di 1 secondo tra ogni stampa
        });
    }
}

calcolaSconto(prodottiApple, (error, data) => {
    if (error) {
        console.log(`ERRORE: ${error.message}`);
    } else {
        console.log("Sconto calcolato con successo:");
        console.log(data);
    }
});

calcolaSconto(capiAbbigliamento, (error, data) => {
    if (error) {
        console.log(`ERRORE: ${error.message}`);
    } else {
        console.log("Sconto calcolato con successo:");
        console.log(data);
    }
});
