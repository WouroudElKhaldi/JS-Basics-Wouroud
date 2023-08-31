const input = document.querySelector('#name')
const surname = document.querySelector("#surname")
const city = document.querySelector("#city")

const reset = document.querySelector("button[name='button']")

const resetForm = () => {
    input.value = " "
    surname.value = " "
    city.value = " "
}

reset.addEventListener('click', () =>{
    let confige = window.confirm("Dou rou wanna reset ?")
    if (confige == true){
        resetForm()
    }
})