/* Intestazione
 nav 
 input per salvare dati che verranno successivamente mostrati

 pulsante salva dati al click

 testo dove mostrare dati salvati

 disposizione tramite flex 
 
 local storage richiesto
 */

const buttonSalva = document.querySelector('.btnSalva');

buttonSalva.addEventListener('click', () => {
    const inputUsername = document.querySelector('.inputUsername').value
    localStorage.setItem('username', inputUsername);
})



function displayData() {
    const local = document.querySelector('.testo')
    const paragrafo = localStorage.getItem('username')

    local.innerText = paragrafo

}

displayData()


