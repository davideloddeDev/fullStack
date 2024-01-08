/*
Scrivi una funzione di nome sayHelloName che, prende come parametro una stringa. 
Questa funzione deve ritornare la concatenazione di due stringhe, per capirci, 
il risultato finale dovrà essere: 'Hello Cosimo'. 
In questo caso, Cosimo è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).

Indicazioni utili:

La funzione dovrà prendere come parametro una stringa
Il parametro in ingresso sarà il nostro nome
La funzione ritornerà 'Hello' seguito dal nostro nome
Abbiamo la possibilità in Javascript di 'sommare' le stringhe così come con i numeri (es. str1 + str2)
Il risultato finale dovrà essere il tuo 'Hello nome' stampato sul terminale
*/

function sayHelloName(name) {
  return 'Hello ' + name;
}

// Chiamata alla funzione con il nome "Cosimo" e stampa del risultato
var nome = 'Cosimo';
var saluto = sayHelloName(nome);
console.log(saluto);
