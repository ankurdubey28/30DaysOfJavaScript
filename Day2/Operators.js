// Arithmetic Operators
console.log(3+4)
console.log(3-4)
console.log(5/2)
console.log(2*9)
console.log(2**3)
console.log(16%5)


// Comparison Operators
console.log(5<2)
console.log(3>1)
console.log(1>=1)
console.log(null == undefined)
console.log(null === undefined)


// Assignment Operators
let num=3;
num++;
num+=1
num-=1
num--;
console.log(num)


// Ternary Operator
let check=num>=0?"positive":"negative";
console.log(check)

// Logical Operators
let name="ankur"
let age=33
console.log(name==="ankur" && age===30)
console.log(name==="ankur" || age===30)
let bool=true
console.log(!bool)

// spread and rest operators: (...)
// 1.spread 
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// 2.rest
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]





