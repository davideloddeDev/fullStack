/*
trovare la parola più lunga di una frase
*/

let frase = "questa è una frase"

function longestWord (sentence){
    let currentWord = ""
    let longestWord = ""

    let maxWordLenght = 0
    
    for (let i = 0; i <= sentence.length; i++){
        let currentChar = sentence[i];
        if (currentChar != " " && currentChar) {
            currentWord += currentChar;

        }else {
            if(currentWord.length > maxWordLenght){
                maxWordLenght = currentWord.length
                longestWord = currentWord
            }
            currentWord = ""
        }
        
    }
    return { word:longestWord , length: maxWordLenght };
}
let risultatoFunzione = longestWord(frase)
console.log("Parola più lunga è:", risultatoFunzione.word)
console.log("Parola più lunga:", risultatoFunzione.length)

