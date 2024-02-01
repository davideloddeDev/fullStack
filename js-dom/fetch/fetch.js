async function fetchData() {
    try {
        const response = await fetch('https://ringsdb.com/api/public/cards/');
        const responseJson = await response.json();
        const card = Math.floor(Math.random(responseJson) * responseJson.length); 

        document.querySelector('.my-title').innerText = responseJson[card].name;
        document.querySelector('.my-image').setAttribute('src', "https://ringsdb.com/"+responseJson[card].imagesrc)
    } catch (error) {
        console.error
    }
}

fetchData();