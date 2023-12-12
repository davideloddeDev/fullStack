/*
verfifica di promise
- then catch
- async await
variabile successo con un valore random. la promise è risolta quando il valore della variabile sarà > di 0.5
timer di 4 secondi
stampa status pending
*/

let mypromise = new Promise((resolve,reject) => {
    setTimeout(()=> {
        let success = Math.random()
        if (success > 0.5) {
            resolve("Success")
        } else {
           reject(new Error("number is < 0.5")) 
        }
        
    },4000)

    
})
setTimeout(() => {
    console.log(mypromise)

}, 4500)
console.log(mypromise)
mypromise.then((x) =>{
    console.log(x)
})
.catch((error) => {
    console.error(error.message)
})

setTimeout(() => {
    console.log(mypromise)
}, 4500)

async function getNumber() {
    try{
        let result = await mypromise
        console.log(result)
    } catch(error) {
        console.error(error.message)
    }
}




