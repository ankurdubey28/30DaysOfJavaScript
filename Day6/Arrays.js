// Array creation
const arr=[1,2,3,4,5]
console.log(Array.from("hello, world"))
console.log(Array.of('a','b','c'))

console.log(arr)
console.log(arr.at(0))
console.log(arr.at(arr.length-1))


// Basic Array methods
arr.push(6)
console.log(arr.pop())
console.log(arr.shift())
arr.unshift(-1,0)
console.log(arr)


// Intermediate Array methods
const doubleArr=arr.map(i => i*2)
console.log(doubleArr)
const evenArr=arr.filter(i=>i%2===0)
console.log(evenArr)
const sumOfArr=arr.reduce((a,b)=>a+b,0)
console.log(sumOfArr)


// Array Iteration
for(let i of arr){
    console.log(i)
}
arr.forEach(i=>console.log(i))


// Multi-dimension Arrays
const mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(mat)
console.log(mat[0][0])


console.log(mat.flat(2))


// Miscellaneous methods
console.log(Array.isArray(arr))
console.log(arr.concat([55,66,77,88,99]))
console.log(arr.sort()) //can also take in a comparator function for custom comaprison
const[a,b,...c]=arr
console.log(a,b,c)
const newArr=[...arr,100]
console.log(newArr)


//slice
let nums=[1,2,3,4,5]
const slice=nums.slice(1,nums.length)
console.log(slice)

//splice
let months=["January","February","Monday","Tuesday"]
let days=months.splice(2,2,"March","April")
console.log(days)
console.log(months)



