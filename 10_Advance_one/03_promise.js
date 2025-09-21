const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is promise 1");
    
    resolve();
  }, 2000)
})

promise1.then(()=>{
    console.log("Promise 1 resolved"); 
})

console.log("after ");

new Promise((resolve,reject)=>{
    setTimeout(function(){
        let err = false
        if(!err){
        console.log("This is promise 2");
        resolve({username:"JackSparrow",email:"abc@a"})
        }
        else{
            reject('Something went wrong')
        }
    },1000)
})
.then((user)=>{
    console.log("Promse resolved");
    console.log(user);
    return user.username
     
})
.then((username)=>{
    console.log(username);

})
.catch((err)=>console.log("Error : ",err))
.finally(()=>{console.log("Promise is setteled");})


const promise5 =new Promise((resolve,reject)=>{
    setTimeout(function(){
        let err = true
        if(!err){
        console.log("This is promise 5");
        resolve({username:"Ram",email:"ram@a"})
        }
        else{
            reject('Something went wrong')
        }
    },1000)
})

async function consumePromise5() {
    try {
        const responce = await promise5
        console.log(responce);
    } catch (error) {   
        console.log(error);
        
    }
       
}

consumePromise5()





