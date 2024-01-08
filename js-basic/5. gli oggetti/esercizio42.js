/*
Scrivere un funzione di nome Smartphone che prenda come parametro i seguenti elementi: brand,name, price. 
Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, 
con le informazioni (parametri) che passiamo
*/

function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const newSmartphone = new Smartphone("Apple", "Iphone 13", 1300);
console.log(newSmartphone);
