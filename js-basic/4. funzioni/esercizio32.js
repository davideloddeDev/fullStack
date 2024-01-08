/*
Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare 
il nostro "Hello" "Nome". Per fare questo, andremo ad utilizzare la funzione di Javascript setTimeout(),
questa come avete visto nel video, prende due parametri. Il primo parametro è una funzione, 
il secondo sono i millesimi di secondo di delay. Nel nostro esercizio, vogliamo che la funzione sayHelloName
abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".

Indicazioni utili:

Documentazione setTimeout
Non dobbiamo modificare la funzione di callback
Entrambe le stringhe "Hello" e "Name" devono essere stampate dopo 1 secondo
Il risultato finale sarà uguale a l'esercizio precedente ma con un delay di 1 secondo
*/

function printName(name) {
    console.log(name);
}

function sayHelloName(name, callback) {
    setTimeout(function () {
        console.log('Hello ' + name);
        callback(name);
    }, 1000); // 1000 millisecondi (1 secondo)
}

// Chiamata alla funzione sayHelloName con la callback printName
var nome = 'Cosimo';
sayHelloName(nome, printName);

