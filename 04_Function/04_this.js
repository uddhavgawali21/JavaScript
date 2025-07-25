
//this in Object
const user ={
    name:"Chaman",
    age:21,
    message:function () {
        //console.log(`${this.name} you are not so smart`);
        //console.log(this);
        
    }
}
user.message()
//console.log(this);


//--------------------------------------------------------------------------------------------
//this in function

function chai() {
    let name = "abc"
    console.log(this.name);             //return undefined
}
//chai()

const chai1 =function () {
    console.log(this);
}
//chai1()

const chai2 =()=>{
    let name ="abc"
    console.log(this)
}
chai2()





