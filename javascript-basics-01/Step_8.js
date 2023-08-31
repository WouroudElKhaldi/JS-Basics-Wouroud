var age = parseInt( prompt("How old are you ?") )

if (!isNaN(age)) {
   if (age > 18) {
    window.alert("You are over 18")
} else {
    window.alert("You are under 18")
} 
} else{
    window.alert("Enter a valid number")
}

