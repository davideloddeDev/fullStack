/*
Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
 -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
 -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
 -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente
  e i titoli dei post.

function fetchUserData() {
    //....
  }
  
  function fetchUserPosts(userId, userName) {
    //....
  }
  
  fetchUserData()
    
*/

function fetchUserData() {
    return new Promise((resolve) => {
      // Simuliamo il recupero dei dati dell'utente dopo un certo periodo di tempo (ad esempio, 1 secondo)
      setTimeout(() => {
        const userData = { id: 1, name: 'John' };
        resolve(userData);
      }, 1000);
    });
  }
  
  function fetchUserPosts(userId, userName) {
    return new Promise((resolve) => {
      // Simuliamo il recupero dei post dell'utente dopo un certo periodo di tempo (ad esempio, 1 secondo)
      setTimeout(() => {
        const userPosts = ['Post 1', 'Post 2', 'Post 3'];
        resolve(userPosts);
      }, 1000);
    });
  }
  
  // Chiamiamo le funzioni in sequenza usando le Promises
  fetchUserData()
    .then((userData) => {
      console.log(`Nome dell'utente: ${userData.name}`);
      return fetchUserPosts(userData.id, userData.name);
    })
    .then((userPosts) => {
      console.log('Titoli dei post dell\'utente:', userPosts);
    })
    .catch((error) => {
      console.error('Si è verificato un errore:', error);
    });
  