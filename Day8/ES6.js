// Template Literals
let name="ankur"
let age=99
let info=`My name is ${name} and my age is ${age}`
console.log(info)
let string="string"
const multilineString = `
This is a string that spans
multiple lines. You can include variables
like this: ${string}.
`;
console.log(multilineString);



// Destructuring
const book={
    title:"atomic habits",
    author:"dont know"
}
const {title,author}=book
console.log(title,author)


const arr=[1,2,3,4,5,6,7,8,9]
const [a,b,c]=arr
console.log(a,b,c)


// Spread and Rest operators
//1. Spread
const newArr=[...arr,10]
newArr.forEach(i=>console.log(i))


//2.Rest
function sum(...args){
    return args.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3))



//Default Parameters
function pro(a,b=1){
    return a*b
}
console.log(pro(5))
console.log(pro(5,4))


// Enhanced Object Literal
let key="Nationality"
const person={
    [key]:"Indian",
    name,
    age,
    getDetails(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
}
person.getDetails()
console.log(person["Nationality"])


