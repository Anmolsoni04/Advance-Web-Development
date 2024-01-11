// console.log("This is based on the loops in javascript")

// let n = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// console.log(a+3)
// console.log(a+4)
// console.log(a+5)

// Let's study loops in javascript to saves our time and energy.
//a) for loop
// b) for in loop
// c) for of loop
// d) while loop
// e) Do-while loop

// a) For Loop:
let num = 3;
for(let i = 0; i < 100; i++){
    // i = 3
    console.log(num + i) 
    //3 + 2 = 5   
}

// b) for in loop:
let obj = {
    "name" : "Anmol Soni",
    "Rollno" : 51,
    "Institute-id" : 20051,
    "Passion": "Music",
}
for (const key in obj) {
    let content = obj[key]
    console.log(key, content)
}

// c) For of loop:

for (const iterator of "Anmol") {
    console.log(iterator)
}

// d) While loop:
let number = 98;
while(number < 100){
    console.log(number) 
    number ++; //
}