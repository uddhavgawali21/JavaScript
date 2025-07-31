const array =[5,4,3,2,1]

array.forEach((element, i) => console.log(i,":",element));

const newArr = []
array.forEach( (ele)=> {
    const val = ele + 10
    newArr.push(val)
})
 console.log(newArr);
 