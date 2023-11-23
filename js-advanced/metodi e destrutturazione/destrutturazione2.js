/*
Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.
const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};
*/

const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };
  
  // Destrutturazione dell'oggetto nidificato
  const { info: { name, age }, grades: { math, science } } = student;
  
  // Utilizzo delle variabili
  console.log("Nome:", name);
  console.log("Età:", age);
  console.log("Voto in matematica:", math);
  console.log("Voto in scienze:", science);
  