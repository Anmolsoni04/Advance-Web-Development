let a = parseInt(prompt("enter name 1"))

let b = parseInt(prompt("enter name 2 "))

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid Input")
}

console.log("The sum is", (a+b));

// We can do error handling using try and catch.


try {
    console.log('The sum is', (a + b))
    console.log('The sum is', x)
} 
catch (error) {
    console.log('Error Error Error!!');
}

// Objects in Try & error

try{
    Anmolsoni;
}catch(error){
    alert(error.name)
    alert(error.message)
    alert(error.stack)
    alert(error.number)
}

// Throw custom error

let age = 30
if(age > 18){
    console.log('You are eligible for driving');
    
    
} else{
    throw new Error("sorry you r not")
}


// Finally clause- mainly plays it's role in a function! For ex->

let a1 = parseInt(prompt("enter 1st numebr"))

let b1 = parseInt(prompt("enter 2nd number "))

if(isNaN(a1) || isNaN(b1)){
    throw SyntaxError("Invalid Input")
}
let x = a + b

// console.log("The sum is", (a+b));
function js() { // js() is a function
    try {
        console.log('The result is', x);
        return true
        
    } catch (error) {
        console.log('Error! Error! Error!');
        return false

    } finally{
        console.log('You are doing well!')
    }
}
js()