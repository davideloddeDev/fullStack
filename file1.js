let frase = "questa è una frase";

function longestWord(sentence) {
    let currentWord = "";
    let longestWordInfo = {
        word: "",
        length: 0
    };

    for (let i = 0; i <= sentence.length; i++) {
        let currentChar = sentence[i];

        if (currentChar && currentChar !== " ") {
            currentWord += currentChar;
        } else {
            if (currentWord.length > longestWordInfo.length) {
                longestWordInfo.length = currentWord.length;
                longestWordInfo.word = currentWord;
            }

            currentWord = ""; // Resetta la parola corrente per iniziare una nuova
        }
    }

    return longestWordInfo;
}

let infoParolaPiuLunga = longestWord(frase);
console.log("Parola più lunga:", infoParolaPiuLunga.word);
console.log("Lunghezza:", infoParolaPiuLunga.length);