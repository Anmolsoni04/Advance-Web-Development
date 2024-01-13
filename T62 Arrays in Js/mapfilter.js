// // ṂAP
let arr = [1,2,3,4,5,6]
let modifyArr = arr.map(and=>{
    return and * 10
})
console.log(modifyArr)
// FILTER
const comparisonFun = (c) => {
    if(c > 3){
        return true
    }
    return false
}
console.log(arr.filter(comparisonFun))


let myName = "anmol"
console.log(Array.from(myName))
