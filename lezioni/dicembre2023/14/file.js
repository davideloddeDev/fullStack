/*
    array di oggetti di prodotti, prezzo, nome
    simulare chiamata al database
    funzione di acquisto prodotto
    gestire gli errori
    controllare la quantità è se disponibile scalare dall'inventario
*/

const product = [
    {
        id: 1,
        name: "iPhone",
        qta: 10
    },
    {
        id: 2,
        name: "iPad",
        qta: 10
    },
    {
        id: 3,
        name: "Mac",
        qta: 10
    }

]

function getList(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.length > 0) {
                resolve(array)
            } else {
                reject(new Error("Array vuoto o inesistente"))
            }
        }, 1000)

    })

}

function buyProduct(nameProduct, quantità, array) {

    const prod = array.find((prodotto) => {
    /*
    if (prodotto.name === nameProduct) {
        return prodotto
    } else {
        throw new Error(`Errore: ${nameProduct} non trovato.`)
    }*/
    return prodotto.name === nameProduct
    })
    

    if (quantità > prod.qta) {
        throw new Error(`Errore: in magazzino non disponiamo di ${quantità} ${nameProduct}`)
    }
    prod.qta = prod.qta - quantità
    return prod
}

getList(product)
    .then((data) => {
        setTimeout(() => {
            console.log(data)
        }, 2000)
        let newArray = buyProduct("iPad", 9, product)

        console.log(newArray)
    }).catch((error) => {
        console.error(error.message)
    })