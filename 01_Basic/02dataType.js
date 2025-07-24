// ******* Stack Memory*********

let v1 = "xyz"
let v2 =v1              //copy of value in v1 is assigned to  v2
console.log(v1);
console.log(v2);

v2="abc"
console.log(v1);
console.log(v2);


///*********** Heap Memory ***********

let myObj ={
    name :"Uddhav",
    email:"xyz.gmail.com"
}

let myObj2 = myObj             /// referane of heap of myObj is given to myObj2

myObj2.email ="abc@gmail.com"    /// change in both
console.log(myObj);
console.log(myObj2);



