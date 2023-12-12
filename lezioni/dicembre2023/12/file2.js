let products = [
    {
        name: "pc",
        prezzo: 1000,
        brand: "Microsoft"
    },
    {
        name: "Mac",
        prezzo: 2500,
        brand: "Apple"
    },
    {
        name: "pc",
        prezzo: 2000,
        brand: "Lenovo"
    }
]

function sale(array) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array)) {
            let discountMap = array.map((product) => {
                if (product.brand === "Microsoft" || product.brand === "Lenovo") {
                    let discount = product.price * 0.2
                    let newPrice = product.price - discount

                    return {
                        ...product,
                        discount: discount,
                        newPrice: newPrice
                    }
                }
                return product

            })
            resolve(discountMap)
        } else reject(new Error("Errore"))
    })
}

sale(products)
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.error(error.message)
    })