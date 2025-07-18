const marval = ['Ironman','thor','Hulk']
const dc = ['superman','flash','batman']

// marval.push(dc)
// console.log(marval);                         //array inside array

const all = marval.concat(dc)
//console.log(all);

const all_new =[...marval,...dc]                // Spread operator to add array
//console.log(all_new);

// flat , isarray , from, of

const arr1 = [1,2,3,[4,5],6,[7,[3,4,1]],8]
const arr2 = arr1.flat(Infinity)
//console.log(arr2);

console.log(Array.isArray('fghjk'));

console.log(Array.from('asdghjk'));

console.log(Array.from({name : 'Uddhav'}));

console.log(Array.of(1,2,3));




