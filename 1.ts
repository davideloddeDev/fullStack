let array: number[] = [1,2,3,4,5];
let arr:(number | string)[] = ["ciao", 1, "bye"]
let numeri: number[] = [1,2,3,4,5];
let newArray: number[] = [];


for (let index = 0; index < array.length; index++) {
    if (numeri.includes(array[index])) {
        newArray.push(array[index])
    }
    
}

console.log(newArray)


function sum(num1: number, num2: number): number {
    return num1 + num2
}

let person: {
    name: string,
    age: number
}

person = {name: "Giovanni", age: 30}