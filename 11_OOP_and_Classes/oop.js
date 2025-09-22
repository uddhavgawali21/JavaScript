
const user ={
    userName : 'Uddhav',
    isloggedIn : true,
    loginCount : 6,
    getdetails: function(){
        console.log(`User details : ${this.userName}`);          //this refers to current context
        
    }}

//user.getdetails();
//console.log(this);

const User = function(name, loggedIn){
    this.name = name
    this.loggedIn = loggedIn
    return this
}

const user1 = new User("uddhav",true)          //construter function
const user2 = User("udGawalidhav",true)
console.log(user1);
console.log(user2);



