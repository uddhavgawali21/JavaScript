
function cart( val1,...num) {        // Rest operator => Take all argument and make array
    return num
}

// console.log(cart(1,2,3,10,23))
// console.log(cart(1, "A",2,'q'))


const user = { 
    Uname : "Don",
    age : 21 
}
console.log(objPassing(user));

 
function objPassing(anyObj) {                                         //object in function parameter 
    return `My name is ${anyObj.Uname} and age is ${anyObj.age}`   
}
console.log(objPassing({Uname : "ghj",age:"50"}));


function getvaluefromArray(newArray) {                             //Array in finction parameter
    return newArray[3]
}
console.log(getvaluefromArray([1,2,"A","B"]));



