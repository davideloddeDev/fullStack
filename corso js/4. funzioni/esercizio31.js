/*
Scrivere due funzioni, la prima funzione si chiamerà sayHelloName,
questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome printName.
La nostra funzione printName dovrà semplicemente fare un console.log() del nostro nome
(ricordiamoci che sarà la funzione di callback). La funzione sayHelloName, prende come parametro una callback,
e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.

Indicazioni utili:

Il risultato finale sarà "Hello" "Nome", stampato sul vostro terminale
*/

function printName(name) {
    console.log(name);
}

function sayHelloName(name, callback) {
    console.log('Hello');
    callback(name);
}

// Chiamata alla funzione sayHelloName con la callback printName
var nome = 'Cosimo';
sayHelloName(nome, printName);

