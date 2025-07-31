/*  Problem: Given an array of objects, where each object represents a product with properties name,
    price, and inStock (a boolean), calculate the total price of all products that are currently in stock,
    after applying a 10% discount to each in-stock product.
*/
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Webcam', price: 50, inStock: false },
];

const total = products
                .filter((product) => product.inStock ==true)
                .reduce((prev ,current) => {
                                  return (current.price * 0.9) +prev
                        },0)
console.log(`The total sum of instock product with 10% dicount = ${total}`);
