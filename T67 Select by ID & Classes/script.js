console.log("Hello World")

let lappuClass = document.getElementsByClassName("box")
console.log(lappuClass)

// Get element by class
lappuClass[4].style.backgroundColor = "green"
lappuClass[3].style.backgroundColor = "red"
lappuClass[2].style.backgroundColor = "blue"
lappuClass[2].style.color = "white"
lappuClass[1].style.backgroundColor = "purple"
lappuClass[0].style.backgroundColor = "aqua"

// Get element by id
document.getElementById("Orangebox").style.backgroundColor = "orange"

// Query selector 
document.querySelector(".query").style.backgroundColor = "lavender"


// Query selector All
document.querySelectorAll(".queryAll").forEach(e => {
    e.style.color = "White"
    e.style.backgroundColor = "black"
})