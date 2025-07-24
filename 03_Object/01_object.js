
const key = Symbol("key1")
const num =11
const JSUser ={
     name:"Uddhav",
     city:"Pune",
     age :21,
     isLogin :false,
     email:"uddhav21@gmail.com",
     "fullName":"Uddhav Gawali",
     [key] :"key2" ,   //symbol
}

// console.log(JSUser.name);
// console.log(JSUser.isLogin);
// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser.fullName );
// console.log(JSUser[key]);
// console.log(typeof JSUser[key]);

// console.log(JSUser);

// // console.log(typeof num);

 Object.freeze(JSUser)
// JSUser.name="abc"
// console.log(JSUser);

JSUser.greet = function(){
    console.log("hello");
    
}
JSUser.greet2 = function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(JSUser);
(JSUser.greet());
(JSUser.greet2());











