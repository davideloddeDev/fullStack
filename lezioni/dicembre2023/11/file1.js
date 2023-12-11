/*
array di oggetti
prodotti, id;nome;prezzo
scrivi una funzione che calcoli prima il prezzo scontato al 20%
poi aggiungere 2 voci all'oggetto. Nuovo prezzo e quantità di sconto
gestione tramite promise async/await
*/

const products = [
    {
        id: 1,
        nameProduct: "iPhone",
        price: 850
    },
    {
        id: 2,
        nameProduct: "iPad",
        price: 1150
    },
    {
        id: 3,
        nameProduct: "Mac",
        price: 2500
    }
]

function setPrice(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray(array)) {
                reject(new Error("Non hai fornito un Array valido"))
            } else {
                let discountMap = array.map((product) => {
                    const discount = product.price * 0.2
                    const discountedPrice = product.price - discount

                    return {
                        ...product,
                        newPrice: discountedPrice,
                        amount: discount
                    }
                })
                resolve(discountMap)
            }
        }, 2000);
    })
}
/*let info = "test"
setPrice(info)
    .then((x) => {
        console.log(x)
    })
    .catch((error) => {
        console.error(error.message)
    })*/

async function handleDiscount(array){
    try {
        console.log(await setPrice(array))
    } catch(error) {
        console.error(error)
    }
}

handleDiscount(products)