let x = parseInt(prompt("Enter first value"))
let y = Number(prompt("Enter second value"))
let op = prompt("Enter the operator")

function calci(x, y, op) {
    switch (op) {
        case "+":
            console.log("Addition is " + (x + y))
            alert("Addition is " + (x + y))
            break;
        case "-":
            console.log("Substraction is " + (x - y))
            break;
        case "*":
            console.log("Multiplication is " + (x * y))
            break;
        case "/":
            console.log("Division is " + (x / y))
            break;
        default:
            console.log("Invalid operator")
            break;
    }
}

calci(x, y, op)



