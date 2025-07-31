arr = [10,2,3,4,5]

const newVal = arr.filter((item => item <5))             //apply filter on array ang return element 
//console.log(newVal);


const  v1 =arr.map((num)=>num * 10)                  // apply function and return result array
console.log(v1);

let v2 = arr.reduce((prevResult,current)=> current+prevResult)     // provide previous call result as arrgument in current call
console.log(v2);
