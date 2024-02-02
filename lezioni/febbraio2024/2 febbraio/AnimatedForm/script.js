const button = document.querySelector('#button')

function isValidEmail(email){
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExEmail.test(email);
}
button.addEventListener('click', function submitForm(event) {
    event.preventDefault()
    const userName = document.querySelector('#name').value
    const userEmail = document.querySelector('#email').value
    const spanName = document.querySelector('.username')
    const spanEmail = document.querySelector('.useremail')
    const card = document.querySelector('.card')

    if(userName === '' || userEmail === ''){
        alert('Compila tutti i campi')
    } else if(!isValidEmail(userEmail)){
        alert('La mail non è nel formato corretto')
    } else {
        spanName.innerText = userName
        spanEmail.innerText = userEmail
        card.style.transform = 'rotateY(180deg)'
    }
} )


