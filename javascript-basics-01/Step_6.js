var num1 = prompt("Enter the value of first number:")
var num2 = prompt("Enter the value of the second number")
var rem = num1 % num2
 
if (!isNaN(num1) && !isNaN(num2)) {
    alert("The remainder of " + num1+ " divided by " + num2 + " is " + rem);
} else {
    alert("Invalid input. Please enter valid numbers.");
}