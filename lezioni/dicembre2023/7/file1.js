/*
acquisto online di prodotti
variabile con all'interno un oggetto,
coppia chiave: valore -> prodotto: numero prodotto

fun1 Controllare se il prodotto c'è poi fare l'ordine
fun2 controllare che l'ordine non ecceda la quantità di prodotti
*/

const products = {
    iphone: 4,
    mac: 3
}

function checkProduct(product, quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products[product] >= quantity) {
                resolve(`il tuo ${product} è disponibile `)
            } else {
                reject(`il prodotto non è disponibile ${product}`)
            }
        }, 2000)
    })
}

async function processOrder(product, quantity) {
    try {
        await checkProduct(product, quantity)
        console.log("ho processato il tuo Ordine")
        console.log(`il tuo ${product} è disponibile`)
    } catch (error) {
        console.error(error)
    }
}

processOrder("mac", 2)
