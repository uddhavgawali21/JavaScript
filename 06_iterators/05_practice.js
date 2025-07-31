/*  Problem: Given an array of strings, filter out strings shorter than 5 characters, 
    convert the remaining strings to uppercase, and then concatenate them into a single string.
 */

const words = ['apple', 'cat', 'banana', 'dog', 'grapefruit'];

const str = words.filter((word) => word.length >5).reduce( (total, current) => total + current.toUpperCase(),"")
console.log(str);

