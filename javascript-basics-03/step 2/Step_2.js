let link = document.querySelectorAll('a')
let div = document.querySelector('#texte')

link.forEach( link => {
    if(link.id === "hide" ) {
        link.addEventListener('click', () => {
            div.style.display = 'none'
        })
    } else {
        link.addEventListener('click' ,() => {
            div.style.display = 'block'
        } )
    }
});