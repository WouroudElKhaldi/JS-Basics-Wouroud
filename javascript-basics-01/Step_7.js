var shoeSize = prompt("Enter your shoe size plz :")
var birth = prompt("Enter your birth year plz :")

const shoe = (shoeSize,birth) => {
    result = ( (shoeSize * 2 + 5) * 50 ) - birth + 1766
    return result
}
window.alert("result is :" + shoe(shoeSize, birth))