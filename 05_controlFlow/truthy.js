const val = ''
if(val){
    console.log("executed");
    
}

// falsy value
//  false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

// Truthy values
//  "0", 'false', " ", [], {}, function(){}



// To cheak array is empty
const arr =[]

if (arr.length===0){
    console.log("Array is empty");
    
}

const obj = {}

if (Object.keys(obj).length===0) {
    console.log("object is empty");
    
}

//Nullish coalescing opertaor(??)

let val1 = 5 ?? 10
val1 = null ?? 21
val1 = undefined ?? 20
val1 = undefined ?? null ?? 10
val1 = NaN ?? null

console.log(val1);

// Ternary operator

let val2 = 100
console.log(val2==100 ? true :false);
val2 ==100 ? console.log("equal to 100") : console.log("not equal to 100");
;

