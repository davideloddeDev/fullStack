async function fetchData() {
    try {
        const response = await fetch('https://api.potterdb.com/v1/books');
        //console.log(response)
        const responseJson = await response.json();
        const book = responseJson.data[0]
        const {title, cover} = book.attributes

        console.log(book)
        console.log(title)
        console.log(cover)

        const h1 = document.querySelector('.my-title');
        const image = document.querySelector('.my-image');

        h1.innerText = title;
        image.setAttribute('src', cover)
    } catch (error) {
        console.error
    }
}

fetchData();