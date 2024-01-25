// Q1 Write a program to load a js file in a browser using promises. Use then() to display an alert when the load complete.

// Solution:
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script')
//         script.src = src
//         script.onload = () => resolve()
//         script.onerror = (error) => reject(error)
//         document.head.appendChild(script);
//     })
// }

// const jsFile = 'D:\Academics & Self Study\Computer Programming\All Tutorials\Compelete Webd-Tutorial\Sigma WebD\Advance-Web-Dev\T78 TryCatch & Error Handling';

// loadScript(jsFile).then(() => {
//     alert("Js file loaded successfully")
// }).catch((error) => {
//     alert("Error is present in the js file" + error.message);
// })

// Q2 write 1st question using async await syntax

// Solution:
// async function loadScript(){
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script')
//         script.src = src
//         script.onload = () => resolve;
//         script.onerror = () => reject;
//         document.head.appendChild(script)
//     })
// }

// Q3 create a promise which rejects after 3 seconds. Use async / await to get it's value. Use a try catch to handle its error.

// Solution:
// function main() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This promise will reject in 3 seconds"))
//         }, 3000);
//     })
// }

// async function tryycatch(){
//     try{
//         await main().catch("error here")
//     }
//     catch(error){
//         console.log("error is",error.message);
        
//     }
// }


// tryycatch()

// Q4 You have given 2 promises- prom1 , prom2, return a new promise. prom1 and prom2 will both resolve with a number, the returned promise should resolve with a sum of the 2 number.

