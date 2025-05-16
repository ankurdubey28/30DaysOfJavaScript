// Funtion constructor 
// this is a slower (runtime compilation) method and thus not be encouraged.
const mul=new Function("x","y","return x*y");

// Function Declaration
// only this declaration does hoisting of function, others do not do.
function Square(num){
    return num*num
}
console.log(Square(5));

// Arrow Functions
const CheckForA=(str)=>{
    return str.includes("A");
}
console.log(CheckForA("Ankur"));



// Default values
function product(a,b=1){
    return a*b
}
console.log(product(5,2));



// Higher Order Functions
function HigherOrder(val,func1,func2){
    return func2(func1(val));
}

function func1(val){
    return val*2
}

function func2(val){
    return val*3
}
console.log(HigherOrder(2,func1,func2));


// Function Expression
const maxi= function (one,two){
    return Math.max(one,two)
}
console.log(maxi(5,6));

// Immediately invoked functions
(
        ()=>{
            console.log("yep")
        })();


// arguments: 
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
// it is iterable and supports methods like length, and typeof operator returns object for arguments as input

function f(a,b,c){
  console.log(arguments)
  console.log(arguments.length)
}

f(1,2,3)





