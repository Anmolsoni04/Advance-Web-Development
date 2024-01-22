// Async nature of Js
// console.log("Anmol is a web developer")
// console.log("Anmol is a full stack developer")


// setTimeout(() => {
//     console.log("I am setimeout")

// }, 1000)

// setTimeout(() => {

//     console.log("I am 2nd setimeout")
// }, 2000)

// console.log("Anmol is also a python Developer")



// callBack function -> We can pass function as a variable

const loadScript = (src, callBack) => {
    // variable initialize
    let script = document.createElement('scripts')
    script.src = src
    script.onload = callBack("anmol", fn) //we declare the fn callBack here
    document.head.append(script)
}
const fn = () => {
    console.log("Nothing to show")
}

// we call the function 'callBack'
const callBack = (arg, fn) =>{
    console.log(arg)
    // alert("I am study about callbacks")
    fn()
}


loadScript("https:www.instagram.com", callBack)