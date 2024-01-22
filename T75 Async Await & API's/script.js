// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(150)
//         }, 3000);
//     })
// }

// async function another(){

//     console.log('Hii')
//     console.log('I am anmol');
//     let prom = await getData()
//     console.log('I live in mtr');
//     console.log('Im doing btech cs');
//     console.log('My clg is in gwalior');
    
// }

// Fetch API's: Their are mainly 2 promises are used during fetching the api's. first is to get the data and one promise is used to parse the data(in json)
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let waitdata = await x.json()
    console.log(waitdata);
      
}

async function another(){

    console.log('Hii')
    console.log('I am anmol');
    console.log('I live in mtr');
    let prom = await getData()
    console.log(prom)
    console.log('Im doing btech cs');
    console.log('My clg is in gwalior');
    
}

another()
// CallBack Approach
// prom.then((value) => {
//     console.log('Value will print');
// })

// Async & Await Approach
