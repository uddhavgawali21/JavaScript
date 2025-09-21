const getData = async function(){
    try{
        const responce = await fetch("https://api.github.com/users/uddhavgawali21")
        console.log(await responce.json());
        console.log("using async await");
        
    }
    catch(err){
        console.log("somthing went wrong",err);
        
    }
    
}
getData()

fetch("https://api.github.com/users/uddhavgawali21")
.then((responce)=>{
        return responce.json()
})
.then(function(data){
    console.log(data);
    console.log("using then");
    
    
}).catch(()=>{
    console.log("Error occured");
    
})