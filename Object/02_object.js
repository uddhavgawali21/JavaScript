
// const data = {
//     name : 'Uddhav',
//     userName :{                 //Nested  Obj
//         fullName:{
//             fName :'Uddhav',
//             lname :'Gawali'
//         }
//     }
// }
// console.log(data.userName.fullName);


//concat object

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3=Object.assign({},obj1,obj2)

//const obj3 = {...obj1,...obj2 }
console.log(obj3)

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(obj3.hasOwnProperty('3'));
console.log(Object.entries(obj3));


const user = [
    {
        id:1,
        name:"Uddhav",
        age:21
    },
    {
        id:1,
        name:"abc",
        age:21
    },
    {
        id:1,
        name:"xyz",
        age:21
    }
]

console.log(user[1].name)



 





