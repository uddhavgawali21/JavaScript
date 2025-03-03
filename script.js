// console.log("Hello")

// alert("This is alert")

// var a = prompt("Enter value")    //var can reassigned
// console.log("x :" +a)

// let x = 100
// console.log(x)
// const y=200                     //const can not be reassigned
// console.log(y)

// let emp= {                //Object
//     empId : 1001,
//     empName : "uddhav",
//     age:21,
//     arr2: [1,2,3,4],
//     empFname: function(){
//         return 'Uddhav Gawali'
//     }

// }

// console.log(emp.empId)
// console.log(emp.empName)
// console.log(emp.arr2)
// console.log(emp.empFname())



// let arr1 = [11,2,3,4,"abc"]
// console.log(arr1)

// function add(){
//     return 'add fun called'
// }

// console.log(add())


// let x="20"
// let y =20

// console.log(x==y ? "sum":"add")

// // console.log(x==y)
//  console.log(x===y)
// console.log(x!=y)
// console.log(x!==y)

// for(let i=0; i<5 ; i++){
//     console.log(i)
// }

// let i=0
// while (i<6) {
//     console.log(i)

// }

// do {

// } while (condition);

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// for (const element of object) {

// }



// let age =15
// if (age<18) {
//     console.log("You are underage")
// }
// else-if(18<age<60){

// }


// let day = "s"

// switch (day) {
//     case "Monday":console.log("Its a Monday")
//         break;

//     default: console.log("Its A another day")
//         break;
// }


// try {
//     let x = 10
//     let y =20
//     console.log(x/y)

// } catch (error) {

//     console.log("Sonthing error occured" + error)

// }


// function Area(width,hight) {
//     if (isNaN(width) || isNaN(hight) ){
//         throw new Error("parameter is not num")

//     }
//         return 'Area :'+ width*hight   
// }

// try {
//    console.log(Area(3,'p'))
// } catch (error) {
//     console.log("Something error"+error)
// }


// finally{
//     console.log("In finally")
// }





// function greet (name) {
//     return 'Hello '+name
// }

// console.log(greet('uddhav'))

// const add =function (a,b) {
//     return a+b
// }

// console.log(add(1,2))

// const person = {
//     fname : "Uddhav",
//     lname : "Gawali",
//     fullName: function(){
//          console.log(`My Name is ${this.fname} ${this.lname}`)
//     }
// }
// console.log(person.fullName())




// // DOM

// let x = document.getElementsByClassName("cl1")
// console.log(x[0].textContent) 
// console.log(x[1].textContent)

// let y = document.getElementById("id1")
// console.log(y.textContent)

// let z = document.getElementsByTagName("h3")
// console.log(z[0].textContent)
// console.log(z[1].textContent)

// let q1 = document.querySelector('.cl1')
// console.log(q1.textContent)

// let q2 = document.querySelectorAll('.cl1')
// console.log(q2[0].textContent)
// console.log(q2[1].textContent)

// let q3 = document.querySelectorAll('h3')
// console.log(q3[0].textContent)
// console.log(q3[1].textContent)

// let y1 = document.getElementById("id1")
//  console.log(y1.tagName)

// let y2 = document.getElementById("div1")
// console.log(y2.innerText)
// console.log(y2.innerHTML)

// let A
// A=[1,2,3,4,4,5,6]
// // console.log(2=='2')
// // console.log(typeof null)
// console.log(A.slice(1))
// console.log(A)

// console.log(A.shift())
// console.log(A)
// let b
// console.log(b===undefined)

// console.log([]==false)
// console.log("5"-2)






// console.log(Array.isArray(A))
// typeof A ==="array"
// Array.isArray(A)
// console.log(A instanceof Array)

// console.log(1<2<3)

// const fun = () =>{}
// console.log(typeof NaN)

// let btn = document.getElementById("id22")
// btn.onclick = (e) =>{
//     console.log("Btn1 clicked")
//     console.log(e.target)
// }
// let btn2 = document.getElementById("id11")
// btn.ondblclick = () =>{
//     console.log("Btn2 clicked")
// }

// let btn = document.getElementById("id22")
// //  btn.onclick = () =>{
// // //      console.log("Btn2 clicked")
// // // }
// // const clicked = () =>{
// //     console.log("Btn clicked")
// // }
// // const dblclicked = () =>{
// //     console.log("Btn clicked 2x")
// // }
// // // const alclicked = () =>{
// // //     alert("please click 2x")
// // // }


// // btn.addEventListener('click',clicked )
// // btn.removeEventListener('click',clicked)

// // let btn2 =document.getElementById('id11')
// // btn2.addEventListener('dblclick',function(){
// //     console.log("Btn2 Clicked")
// // })
// // //btn2.addEventListener('click',alclicked)




// class person{
//     constructor(name1,age1){
//         console.log("Constructor called")
//         this.name =name1
//         this.age=age1

//     }

//     greet (){
//         console.log("greet called")
//     }
// }

// const p1=new person('Uddhav',21)
// console.log(p1.name)
// p1.greet()


// class Employee{
//     constructor(name,age,job){
//         this.emp_name =name
//         this.emp_age =age
//         this.emp_position = job
//     }
//     display(){


//         return `My name is ${this.emp_name} age:${this.emp_age} job:${this.emp_position}`
//     }

// }

// const emp =new Employee('uddhav',21,'JavaDev')
// const emp2 =new Employee('Ram',21,'JavaDev')


// console.log(emp.display())
// console.log(emp2.display())




// class person{
//         constructor(name1,age1){
//             console.log("Parent Constructor ")
//             this.name =name1
//             this.age=age1

//         }

//         greet (){
//             console.log("greet called")
//         }
//     }


// class Employee extends person{
//     constructor(name,age,job){
//         console.log('Child Constructor')
//         super()
//         this.emp_name =name
//         this.emp_age =age
//         this.emp_position = job
//      }
//     display(){      
//     return `My name is ${this.emp_name} age:${this.emp_age} job:${this.emp_position}`
//     }
// }

// const emp1 = new Employee('Ram',21,'Developer')
// console.log(emp1.display())
// emp1.greet()

// console.log(new Date())


// window.addEventListener("resize", function(){
//     document.getElementById("demo").innerHTML = Math.random();
// });


// const para = document.createElement("p");
// const node = document.createTextNode("This is new para");
// para.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(para);


// const div2=document.createElement("div")
// // const node2= document.createTextNode("This is div")
// // div2.appendChild(node2)
// const ele = document.getElementsByTagName('body')
// ele[0].appendChild(div2)



// class Person {
//     constructor(name,age){      ////Encapsulation
//         this.name = name
//         let _age = age

//     }
//     this.getAge = ()=>function{
//         return _age
//     }
// }

// const person = new Person('Uddhav',21)

// console.log(person.name)
// console.log(person.age)
// console.log(person.getAge)



// class Car {

//     constructor(model){
//         this.model=model
//     }
//     start(){
//         console.log('Car is started')
//         this._fuelInjection()
//     }
//     _fuelInjection(){
//         console.log('Fuel Injected')
//     }
// }

// const car1 = new Car("Tata")
// car1.start()
// car1._fuelInjection()

//syncronous prog......
// console.log('start')
// for(let i =0;i<5;i++){
//     console.log(i)
// }
// console.log('start')


//asyncronous prog...

// console.log('start')
// setTimeout(() => {
//     console.log('async')

// }, 2000);
// console.log('end')


//sync callback

// function greet(name , callback){
//     console.log('Hello'+name)
//     callback();

// }
function afterGreet(){
    console.log('Greet Completed')
}

// greet('Uddhav',afterGreet)



function getData(){
    let result = fetch("https://jsonplaceholder.typicode.com/users")
    let data = result.json()
    console.log(data)
}














