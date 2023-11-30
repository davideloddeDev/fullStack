/*
Convertire la seguente funzione basata su callback in una funzione basata su Promise.

function callback_BasedFunction(arg1, arg2, callback) { 
  setTimeout(() => { 
  const result = arg1 + arg2; 
  if (result % 2 !== 0) { 
  callback(null, result); 
  } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000);
  }
*/

function promiseBasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 1000);
    });
}

// Utilizziamo la Promise
promiseBasedFunction(3, 5)
    .then((result) => {
        console.log('Risultato:', result);
    })
    .catch((error) => {
        console.error('Errore:', error.message);
    });
