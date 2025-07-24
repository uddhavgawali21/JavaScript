
function Add(num1,num2) {
    let sum = num1+ num2
    return sum  
}
//console.log(Add(3,4))

function Login(userName = "A") {              // Default value   //Funtion parameter
   if (!userName) {
    return "Please enter Name"
     }

   return `${userName} you just logged in  `
}
console.log(Login());                             //Undefined
console.log(Login("Uddhav"));                     //Argument paasing
