// Basics Of Js function

function field(field_name) {
    console.log("I love singing in " + field_name)
    console.log("I love writing songs in "  + field_name)
    console.log("I love beatimng drum in " + field_name)
    console.log("I love playing guitar in "  + field_name)
    console.log("I love concerts in " + field_name)
}

function name(person){
    console.log(person + " love singing in ")
    console.log(person + " love writing songs in ")
    console.log(person + " love beatimng drum in ")
    console.log(person + " love playing guitar in ")
    console.log(person + " love concerts in ")
}

// field("Music")
field("Anmol")
//Sum using Js Function

function sum(a, b){
    return a + b
}
resultofanmol = sum(50, 40)
resultofansh = sum(5, 95)
resultofpriyanka = sum(55, 45)
resultofsiddhant = sum(40, 40)
resultofrishabh = sum(50, 35)
resultofraghav = sum(50, 45)
console.log("Anmol's Result: " , resultofanmol)
console.log("Ansh's Result: ", resultofansh)
console.log("Priyanka's Result: ", resultofpriyanka)
console.log("Siddhant's Result: ", resultofsiddhant)
console.log("Rishabh's Result: ", resultofrishabh)
console.log("Raghav's Result: ", resultofraghav)

// CONCEPT OF THE 3RD PARAMETER THAT IS OPTIONAL:

function sum(a, b, c = 1){
    return a + b + c
}

resultofanmol = sum(50, 40)
resultofansh = sum(5, 95)
resultofpriyanka = sum(55, 45)
resultofsiddhant = sum(40, 40)
resultofrishabh = sum(50, 35)
resultofraghav = sum(50, 45)
console.log("Anmol's Result: " , resultofanmol)
console.log("Ansh's Result: ", resultofansh)
console.log("Priyanka's Result: ", resultofpriyanka)
console.log("Siddhant's Result: ", resultofsiddhant)
console.log("Rishabh's Result: ", resultofrishabh)
console.log("Raghav's Result: ", resultofraghav)

// Arrow Function

const fun1 = (m) => {
    console.log("We are studying about arrow function!", m)
}

fun1(22);