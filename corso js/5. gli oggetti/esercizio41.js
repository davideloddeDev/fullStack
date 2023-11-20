/*
Abbiamo l'oggetto smartphone, utilizzando uno specifico metodo degli oggetti, possiamo rendere questo oggetto 'freezato',
e quindi non modificare il prezzo così facilmente. Sapresti scrivere il metodo che ci serve?

const smartphone = {
brand: "Apple",
name: "Iphone 13",
price: 1300,
};

smartphone.price = 100;

console.log(smartphone);
*/

const smartphone = {
  brand: "Apple",
  name: "iPhone 13",
  price: 1300,
  getPrice: function() {
    return this.price
  },
  setPrice: function(newPrice) {
    if (typeof newPrice === 'number' && newPrice > 0) {
      this.price = newPrice;
      console.log("Prezzo aggiornato a", newPrice)
    } else {
      console.log("Inserisci un prezzo valido.");
    }
  }
}
smartphone.price = 100
console.log(smartphone.getPrice())