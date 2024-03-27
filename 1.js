var array = [1, 2, 3, 4, 5];
var arr = ["ciao", 1, "bye"];
var numeri = [1, 2, 3, 4, 5];
var newArray = [];
for (var index = 0; index < array.length; index++) {
    if (numeri.includes(array[index])) {
        newArray.push(array[index]);
    }
}
console.log(newArray);
function sum(num1, num2) {
    return num1 + num2;
}
var person;
person = { name: "Giovanni", age: 30 };
