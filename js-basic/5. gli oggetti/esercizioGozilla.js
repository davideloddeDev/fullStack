function factorial(number1) {
    //Insert your code here 
    let factorial = 1;

    if (number1 === 0 || number1 === 1){
        console.log(factorial)
        return factorial
        
    } else {
        for (let i = 2; i <= number1; i++) {
            factorial *= i;
        }
        console.log(factorial)
        return factorial
    }
    
    //Remember to return the result, execute tests to see if your code is correct
}
factorial(0)
factorial(5)
factorial(3)
factorial(2)
// Do not write code here