/*
costruire 2 array di oggetti, non riassegnabili, leads, users
function che simuli un ritardo 2 secondi
*/

const leads = [
    {
        name: "Mario",
        age: 23
    },
    {
        name: "Paola",
        age: 30
    }
]

const users = [
    {
        name: "Giovanni",
        age: 23
    },
    {
        name: "Alessandra",
        age: 30
    }
]

function funzioneGet(callback, data) {
    console.log("Sto processando i tuoi dati")
    setTimeout(()=> {
        
        callback(data)
        
    }
        ,2000)
    
}

function gestisciDati(data) {
    console.log(data)
}

funzioneGet(gestisciDati, leads)
funzioneGet(gestisciDati, users)


