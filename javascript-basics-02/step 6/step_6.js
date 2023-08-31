let img = document.querySelectorAll('img')


img.forEach( (element) => {
    element.addEventListener('mouseover', (e) => {
        e.target.setAttribute('src' , `./images/${element.id}_2.jpg`)
    })
    element.addEventListener('mouseout' , (e) =>{
        e.target.setAttribute('src' , `./images/${element.id}.jpg`)
    })
}
)