async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


// IIFE-> (Immediately Invoked Function Expression).We used in the async and await function. with the help of IIFE, code will still run without calling the async function again. So this is the syntax of IIFE:
(async function main() {
    let a = await sleep()
    console.log(a);
})()


// Destructuring
let [x,y, ...rest] = [1,3,7,2,1]
console.log(x,y, rest);

let obj = {
    a:1,
    b:2.1,
    c:"anmol"
}
    let {a,c} = obj
    console.log(a,c);
// using this we are able to detach the values from the object.


// Spread operator
// let nums = [1,4,22,33]
// console.log(nums[0] + nums[1] + nums[2] + nums[3]);

const a1 = "a"
const b1 = "b"
const c1 = {a1,b1} //spreading
console.log(c1);