/*
funzione che modifichi le parole a cominciare da un modificatore creando il seguente array di parole: 
let arrayDiParole = ['Rocket (89P13)', 'Starlord', 'Gamora', 'Groot', 'Drax']
il risultato deve o farci le parole in UpperCase o LowerCase o dirci il numero di caratteri 
che è compresa in ogni stringa
*/

let arrayDiParole = ['Rocket (89P13)', 'Starlord', 'Gamora', 'Groot', 'Drax']

function stringModifier(modifier, ...strings) {
    let resultString = ""
    switch (modifier) {
        case "UpperCase":
            resultString = strings.map(string => string.toUpperCase());
            break;

        case "LowerCase":
            resultString = strings.map(string => string.toLowercase());
            break;

        case "lenght":
            resultString = strings.map(string => `${string} (${string.length})` );
            break;

        default:
            console.log("modificatore non valido")
            return;
    }
    console.log("Sto modificando le parole...")
    const id = setInterval(() => {console.log(".")}, 500)

    setTimeout(() => {
        clearInterval(id)
        console.log(resultString)
    }, 2000)

}

stringModifier("UpperCase", ...arrayDiParole)