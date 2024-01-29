function validateForm() {
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;

    if((name && surname && email) === "") {
        alert("Compila i campi prima di procedere!")
    }else {
        if (name.length >= 2 && surname.length >= 2) {
            sessionStorage.setItem('name', name)
            sessionStorage.setItem('surname', surname)
            alert("Modulo inviato con successo!")
        }else {
            alert("Nome e cognome devono contenere 2 caratteri o più")
        }
    }
}