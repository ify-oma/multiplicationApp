let num1 = parseInt(prompt("Enter the first number:"))
let num2 = parseInt(prompt("Enter the second number:"))

let result = num1 * num2;
document.getElementById("question").innerHTML = `The result of ${num1} multiplied by ${num2} is: ${result}?`;

