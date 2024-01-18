console.log("Helloworld")

// innerHTML
// console.log(document.querySelector(".box").innerHTML)
// console.log(document.querySelector(".container").innerHTML)

// // innerText
// console.log(document.querySelector(".container").innerText)

// outerHTML
console.log(document.querySelector(".container").outerHTML)

//tagname(return only the tag)
console.log(document.querySelector(".container").tagName)

// nodename(return all typ of node like comment node, textnode , etc.)

// textContent
console.log(document.querySelector(".container").textContent)

// hidden (true or false)
console.log(document.querySelector(".container").hidden)


// To CHANGE & INSERT your content using js in this way:
document.querySelector(".box").innerHTML = "Im AnmolSoni"

// ATTRIBUTE METHODS:

// 1) Has Attribute
console.log(document.querySelector(".box").hasAttribute("style"))

// 2) get Attribute
console.log(document.querySelector('.box').getAttribute("style"))

// 3) set Attribute
// console.log(document.querySelector(".box").setAttribute("style", "backgroundColor: green"))

//We can also Remove attribute like this:
// console.log(document.querySelector(".box").removeAttribute("style"))

// We can also see all attributes in a following way:
console.log(document.querySelector(".box").attributes)

// Yu can change and edit any website using:
// document.designMode = 'on'

// classList
console.log(document.querySelector(".container2").classList)
//className
console.log(document.querySelector(".container").className)
// add OR remove classList 
// If we add multiple time but it add only once

// toggle the classList 