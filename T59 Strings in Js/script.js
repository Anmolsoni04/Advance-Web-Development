// let input = 'Anmol';
// console.log(input)

// console.log(input[0]) //-> returns A
// console.log(input[1]) //-> returns n
// console.log(input[2]) //-> returns m
// console.log(input[3]) //-> returns o
// console.log(input[4]) //-> returns l

// console.log(input.length) //-> returns length of the string //5

//Let's understand template literals

// let fav_song = "Lover"
// let fav_singer = "ArmaanMalik"

// console.log(`My favourite song is ${fav_song} but my favourite singer is ${fav_singer}`)



//Upper & Lower Case

let earth = "AnmolEarthPeRehtaHai"
console.log(earth.toUpperCase())
console.log(earth.toLowerCase())
console.log(earth.length)


// Strings Slicing 

// Ṣlice Method

let ex = "Tamilnadu"
console.log(ex.slice(1,6)) //return -> 'amiln'
console.log(ex.slice(3,6)) //return -> 'iln'
console.log(ex.slice(1,8)) //return -> 'amilnad'
console.log(ex.slice(1,8)) //return -> 'amilnad'

// Concate MEthod
let naam = "Anmol"
let upnaam = "Soni"
console.log(naam.concat(upnaam, "Verma"))

//Replace Method

let pastJob = "JpMorgan"
let presentJob = "TCS"

console.log(presentJob.replace("TCS", "ShopDeck"))

//Replace Method use in a single word

let word = "AnmolSoni";
console.log(word.replace("Soni", "0404"))

//Trim method (use to remov whiteSpaces)

let meraname = "    Anmol"
console.log(meraname.trim())

