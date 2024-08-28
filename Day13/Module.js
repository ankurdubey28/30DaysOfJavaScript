// creating and exporting module

export default function sum(a,b){
    return a+b
}


export const person={
    name:"jacob",
    age:111
}


const name="myVariable"
const fun=()=>console.log("wow")


// Node - multiple module.exports cannot be opened in single file
// module.exports={
//     name,
//     fun,
//     sum,
//     person
// }

// ES6 introduced the newer import export syntax prior to which
// module.exports and require syntax is used

// Named vs Default exports in import/export syntax
// Default export means that the current module is meant to export
// a particular item (function,variable,etc.) only.
// Default exports can be imported with any name, one default export per module.
// Named exports are used to export multiple things and imported by using
// {} syntax . When importing use exact same name as while exporting or use "as" keyword.
// import * syntax imports the enti