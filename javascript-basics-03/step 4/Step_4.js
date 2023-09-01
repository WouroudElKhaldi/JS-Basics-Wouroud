let pass =  document.querySelector('#password')
let config = document.querySelector('#confirmation')
let press = document.querySelector("button")

press.addEventListener('click', ()=> {
    if(pass.value !== config.value) {
        pass.style.border = '2px solid red'
        config.style.border = '2px solid red'
    } else {
        pass.style.border = "1px solid black"
        config.style.border = "1px solid black"
    }
})