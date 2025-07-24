
 const myArr = [0,1,2,3,4,5]
// console.log(myArr)

 const myArr2 = new Array(1,2,3,4)
//  console.log(myArr2)
// console.log(myArr[2])

// //Array Methods
// myArr.push(6)
// console.log(myArr)

// console.log(myArr.pop())

// console.log(myArr.toString())
// console.log(myArr.indexOf(6))
// console.log(myArr.includes(7))

const newArr = myArr.join("|")           //join the array element with seperator into string
//console.log(newArr);

// slice,splice
console.log('A',myArr);
console.log(myArr.slice("",5));
console.log(myArr.slice(-4,-2));
console.log('B',myArr);

console.log(myArr.splice(2,3));
console.log('C',myArr);



myArr.unshift(9)                        // Add element at start
//console.log(myArr)

//console.log(myArr.toLocaleString());      // convert to string

// Array concatinaton
const myNA = myArr.concat(9,8,77,66)
//console.log(myNA);

// Sort
const arr =[9,14,8,66,41]
//console.log(arr.sort((a, b) => b-a));     //Descending    //method parameter is important

//console.log( [9,14,8,66,41].sort((a, b) => a-b))  //ascending







