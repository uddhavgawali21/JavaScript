
let lname ="ME";

(function chai() {
    console.log("DB connected");
        console.log(lname);

})();


( (DBname)=>{
    console.log(`${DBname} DB connected`);
}
)("Student");

const sum = ((a,b)=>{
    console.log(lname);
    
    return a+b
})(1,5)

console.log(sum);

