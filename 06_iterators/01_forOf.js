
const arr =[1,2,3,3,4,5]

for (const i of arr) {
   // console.log(i);
    
}
let greet = "Hello Hi"
for (const g of greet) {
    if (g ==" ") {
        continue
    }
   // console.log(g);
    
}
   // console.log(g);


//Maps

const map = new Map()
map.set(1,"A")
map.set(2,"B")
map.set(3,"C") 
map.set(4,"D")
map.set(5,"E")

//map.clear()
//map.delete(2)
//console.log(map.entries());
//console.log(map.keys());
//console.log(map.size);

//console.log(map);

for (const [key,val] of map) {
    console.log(key,":-",val);
    
    
}

const myObj = {
    'n1' : 'John',
    'n2' : 'The don'

}


// Iterating object
for (const [key,val] of Object.entries(myObj)) {
   // console.log(key,":",val);
    
}
for (const key of Object.keys(myObj)) {
  //  console.log(key ,"-",myObj[key]);
    
}

