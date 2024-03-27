let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArray = []

let numbers = arr.filter((num, index) => arr.indexOf(num) === index)
arr.forEach( num => {
    if (!newArray.includes(num)) {
        newArray.push(num)
    }
})
console.log(numbers)
console.log(newArray)

arr.forEach((numero) => {
    numero * numero
})

let numbers1 = [3, 4, 1, 10, 8]

let numeroAnalizzato = numbers1[0]

for (let index = 0; index < numbers1.length; index++) {
    const element = numbers1[index];
    if (element > numeroAnalizzato) {
        numeroAnalizzato = element
    }

}

console.log(numeroAnalizzato)

