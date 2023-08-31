let divElement = document.createElement('div')
let inputElement = document.querySelector('#name')

divElement.id = 'divv'
document.body.appendChild(divElement)
let div = document.querySelector('divv')
inputElement.addEventListener('input', ()=> {
    divElement.textContent = inputElement.value 
});