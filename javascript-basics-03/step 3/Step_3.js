let text = document.querySelector("#text")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")

red.addEventListener('click', () =>{
    text.style.color = "red"
})

green.addEventListener('click', () => {
    text.style.color = "green"
})

blue.addEventListener('click' , () => {
    text.style.color = "blue"
})