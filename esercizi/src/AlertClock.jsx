// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export function AlertClock() {
    const [ora, setOra] = useState(""); // Inizializza la variabile di stato per l'ora

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const newOra = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
            setOra(newOra); // Aggiorna la variabile di stato con il nuovo valore dell'ora
        }, 1000);

        return () => clearInterval(intervalId); // Pulisci l'intervallo quando il componente viene smontato
    }, []); // Il secondo argomento vuoto [] assicura che l'effetto venga eseguito solo una volta all'avvio del componente

    return (
        <div>
            <p>{ora}</p>
        </div>
    );
}

