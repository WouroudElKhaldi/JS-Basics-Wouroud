const img = document.querySelector('#image1')

img.addEventListener('mouseover', () =>{
    img.style.border =  'solid 3px red'

}
)

img.addEventListener('mouseout' , () => {
    img.style.border = "none"
})