
function one(){
    const name ="Ram"
    function two(){
        console.log(name);
        const web ="Youtube"
        var Lname = 'abc'

    }
    //console.log(web);              //outside the block scope
    //console.log(Lname);            //outside the function scope
    
    two()
}
one()


if (true) {
    const name ="Jack"
    var Lname = "sparrow"
    if (true) {
        console.log(name+Lname);
        const info = 'piretes'
        var ship="Black Peral"
    }
    //console.log(info);                      //  const is block scoped
    console.log(ship);                        // var is function or global scoped
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addOne(1));

function addOne(num1){
    return num1+1
}

//console.log(addTwo(1));                      //cannot access before initialization 
                                            // because it is stored as expression
const addTwo = function (num2) {              
    return num2+2
}







