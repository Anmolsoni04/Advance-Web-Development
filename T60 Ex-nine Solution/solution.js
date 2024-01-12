// Problem statement:

// Create a Faulty Calculator using JavaScript. This faulty calculator does following:
// It takes 2 numbers as i/p from the user
// It performs wrong operations as follows:


// + ---> -
// * ---> +
// - ---> /
// / ---> **

// Performs wrong operations 10% of times.
// FUNCTION METHOD:

function faultyCalc(operand, num1, num2){
    switch (operand){
        case '+':
            return num1 + num2 + (Math.random() - 10);
        case '-':
                return num1 - num2 - (Math.random() / 10);
        case '*':
            return num1 * num2 * (Math.random() + 10);
        case '/':
            return num1 / num2 / (Math.random() ** 10);
            default:
                return 'Invalid Entries!'
    }
}

function calculate(){
    let operand = prompt('Enter an operator ( +, -, **, *, /): ');;
    let num1 = parseInt(prompt('Enter a number: '));;
    let num2 = parseInt(prompt('Enter another number: '));;
    if(isNaN(num1) && isNaN(num2)){
        console.log("Invalid input Try again!");
    }
    else{
        let result = faultyCalc(operand, num1, num2);
        console.log(result);
    }
    
}
calculate();

//WITHOUT 10% CONDITION:

// function calculate(){
//     let operand = prompt('Enter an operator ( +, -, **, *, /): ');;
//     let num1 = parseInt(prompt('Enter a number: '));;
//     let num2 = parseInt(prompt('Enter another number: '));;
//     if(isNaN(num1) && isNaN(num2)){
//         console.log("Invalid input Try again!");
//     }
//     else{
//         let result = faultyCalc(operand, num1, num2);
//         console.log(result);
//     }
// }
// function faultyCalc(operand, num1, num2){
//     switch (operand){
//         case '+':
//             return num1 - num2 
//         case '-':
//                 return num1 / num2 
//         case '*':
//             return num1 + num2 
//         case '/':
//             return num1 ** num2 
//             default:
//                 return 'Invalid Entries!'
//     }
// }

// calculate();


// USING IF-ELSE METHOD:

// let input = prompt(("Enter a operators: (+, -, *, /, **): "))
// let num1 = parseFloat(prompt('Enter 1st number'))
// let num2 = parseFloat(prompt('Enter 2nd number'))
// if(input == '+'){
//     console.log(num2 - num1)
// }
// if(input == '-'){
//     console.log(num2 / num1)
// }
// if(input == '*'){
//     console.log(num2 + num1)
// }
// if(input == '/'){
//     console.log(num2 ** num1)
// }
// if(input == '**'){
//     console.log(num2 * num1)
// }
// else{
//     console.log("Invalid input")
// }