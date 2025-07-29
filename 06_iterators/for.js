console.log("break statement execution");

for (let i = 0; i <= 10; i++) {
    const element = i
    if(i===5) {
        console.log("detected 5");
        
        break
    };
    console.log(i);
    
}
console.log("-----------------------------------------------------------");

console.log("continue statement execution");
for (let i = 0; i <= 10; i++) {
    const element = i
    if(i===5) {
        console.log("detected 5");

        continue
    };
    console.log(i);
    
}


