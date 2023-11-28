/*
funziona che prenda in inout un indirizzo email e controlla se c'è la chiocciola
*/

const error = new Error("La tua mail non è valida")
function checkEmail(mail, callback) {
    if(mail.includes("@")) {
        callback(null, `La tua mail: ${mail} è valida`)
    } else callback(error,null)
}

let mail = "dalo.apps@gmail.com"

function handleError(error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
}

checkEmail(mail, handleError)



