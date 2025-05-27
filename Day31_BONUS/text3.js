// JS Function Methods : call , bind , apply
// These methods allow you to control the context(this value) when calling functions.
//
// 1. call() - akin to saying execute the given function with context(this)
//             set to a particular object. Useful in method borrowing.

function introduce(age,city){
    console.log(`Hello, my name is ${this.name} and age is ${age} and i live in ${city}`)
}

const p1={name:"alice",age:25}
const p2={name:"bob",age:30}

introduce.call(p1,21,"tokyo")
introduce.call(p2)


// 2. apply() -  works exactly like call() , just that instead of passing arguments
//               individually, an array of arguments is passed. Useful in older codebase
//               and in scenarios where input is a dynamic array.

introduce.apply(p2,[22,"tokyo"])


// 3. bind() - fundamentally different than call and apply in sense that instead of invoking
//             function immediately, it creates and returns a brand new function with permanently
//             attached context. Useful in event handlers and callbacks.

const customIntroduce=introduce.bind(p2,22,"tokyo")
customIntroduce()
