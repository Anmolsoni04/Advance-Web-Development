// Promises in Js:

// let prom = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num > 0.5){
//         reject("Our site is under maintainence")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly");
//             resolve("Name of the website is www.Cleanify.com")
//         }, 1000)
//     }
// })

// Promise API's

// 1)Promise.all:
// let prom = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num < 0.5){
//         reject("Our site is under maintainence")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly");
//             resolve("Name of the website is www.Cleanify.com")
//         }, 1000)
//     }
// })


// let prom2 = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num < 0.5){
//         reject("Our site is under maintainence 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly 2");
//             resolve("Name of the website is www.support.Cleanify.com")
//         }, 2000)
//     }
// })


// Promise.all([prom, prom2]).then((e) => {
//     console.log(e);
// }).catch((ee) => {
//     console.log(ee);
// })


//2) Promise.allSettled:
// let prom0 = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num < 0.5){
//         reject("Our site is under maintainence")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly");
//             resolve("Name of the website is www.Cleanify.com")
//         }, 1000)
//     }
// })


// let prom1 = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num > 0.5){
//         reject("Our site is under maintainence 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly 2");
//             resolve("Name of the website is www.support.Cleanify.com")
//         }, 2000)
//     }
// })


// Promise.allSettled([prom0, prom1]).then((e) => {
//     console.log(e);
// }).catch((ee) => {
//     console.log(ee);
// })

// // 3) Promise.race
// let prom3 = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num < 0.5){
//         reject("Our site is under maintainence")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly");
//             resolve("Name of the website is www.Cleanify.com")
//         }, 1000)
//     }
// })


// let prom4 = new Promise((resolve,reject) => {
//     // let num = Math.random()
//     let num = 10
//     if(num > 0.5){
//         reject("Our site is under maintainence 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Our Site is working properly 2");
//             resolve("Name of the website is www.support.Cleanify.com")
//         }, 2000)
//     }
// })


// Promise.allSettled([prom3, prom4]).then((e) => {
//     console.log(e);
// }).catch((ee) => {
//     console.log(ee);
// })

// 4) Promise.any:

let prom5 = new Promise((resolve, reject) => {
    let numb = 10
    if(numb > 0.5){ // 10 > 0.5
        resolve("This website working properly")
    }
    else{
        setTimeout ( () => {
            reject("Sorry! Our work is under Maintenance")
        }, 1000)
    }
})

let prom6 = new Promise((resolve, reject) => {
    let numb = 10
    if(numb < 0.5){ // 10 > 0.5
        resolve("This website working properly")
    }
    else{
        setTimeout ( () => {
            reject("Sorry! Our work is under Maintenance")
        }, 1000)
    }
})

Promise.any([prom5, prom6]).then((e) => {
    console.log(e);
}).catch((e) => {
    console.log(e);
})