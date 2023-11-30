/*
Crea una Promise che simula il recupero dei dati da un'API. 
A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.
-Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
-La chiamata avrà successo con il messaggio Data retrieved successfully se il valore
 random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch
  data

function fetchDataFromAPI() {
  //....
}

fetchDataFromAPI()
  //.....
*/

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Generiamo un valore numerico random compreso tra 0 e 1
        const success = Math.random();

        // Simuliamo il recupero dei dati dall'API
        setTimeout(() => {
            if (success < 0.5) {
                // La chiamata ha successo
                resolve('Data retrieved successfully');
            } else {
                // La chiamata fallisce
                reject(new Error('Error: Failed to fetch data'));
            }
        }, 1000); // Ritardo simulato di 1 secondo
    });
}

// Utilizziamo la Promise
fetchDataFromAPI()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    });
