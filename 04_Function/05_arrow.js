
const show = ()=>{
    console.log("This is Arrow function");               //simple arrow function
}
show()


const sum1 = (num1,num2)=>{return num1+num2}                     //to use return keyword {} are needed
console.log(sum1(1,2))


const show1 = ()=> console.log("This is Arrow function");         //implicit arrow funtion
show1()


const sum2 = (num1,num2)=> num1+num2
console.log(sum2(2,3));
 

const obj1 = ()=> ( { name:"A", age:22} )                    //use parenthesis to return object in implict
console.log(obj1());

