console.log("Hello World")


// Get element by class
// let boxes = document.getElementsByClassName("box1")
// console.log(boxes)
// boxes[0].style.backgroundColor="red"

// let boxes2 = document.getElementsByClassName("box2")
// boxes2[0].style.backgroundColor="blue"
// boxes2[0].style.color="white"

// let boxes3 = document.getElementsByClassName("box3")
// boxes3[0].style.backgroundColor="aqua"

// let boxes4 = document.getElementsByClassName("box4")
// boxes4[0].style.color="white"
// boxes4[0].style.backgroundColor="black"

// let boxes5 = document.getElementsByClassName("box5")
// boxes5[0].style.backgroundColor="purple"

// query selector
// document.querySelector(".box1").style.backgroundColor = "red"

// query selectorAll
document.querySelectorAll(".box1").forEach(element => {
    element.style.backgroundColor = "purple"
    element.style.color = "white"
})

document.querySelectorAll(".box2").forEach(element => {
    element.style.backgroundColor = "orange"
})

document.querySelectorAll(".box3").forEach(element => {
    element.style.backgroundColor = "green"
    element.style.color = "white"
})

document.querySelectorAll(".box4").forEach(element => {
    element.style.backgroundColor = "red"
    element.style.color = "white"
})

document.querySelectorAll(".box5").forEach(element => {
    element.style.backgroundColor = "black"
    element.style.color = "white"
})