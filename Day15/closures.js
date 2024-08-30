// Basics of closures
function OuterFunc(){
    let name="oneplus"
    return function InnerFunc(){
        console.log(name)
    }
}

const innerFunction = OuterFunc();
innerFunction();

function OuterCounter(){
    let count=0
    return function (){
        return count++
    }
}

const innerCount=OuterCounter()
console.log(innerCount())
console.log(innerCount())
console.log(innerCount())



// Practical Closures
const OuterFun=(name)=> {
    return () => {
        console.log(`greeting to ${name}`)
    }
}

const out=OuterFun("alice")
out()

function createComplexIDGenerator() {
    let counter = 0;

    return function() {
        const timestamp = Date.now().toString(36);  // Convert current timestamp to base-36 (alphanumeric)
        const randomComponent = Math.random().toString(36).substring(2, 8);  // Generate a random 6-character string
        const count = (counter++).toString(36);  // Increment and convert counter to base-36

        return `${timestamp}-${randomComponent}-${count}`;
    };
}

const generateComplexID = createComplexIDGenerator();

console.log(generateComplexID());
console.log(generateComplexID());
console.log(generateComplexID());



// Closures in Loop
for(let i=0;i<5;i++){
    let fun= function (){
        return function(){
            console.log(i)
        }
    }
    fun()()
}



// Module Pattern : Commonjs is based on module pattern
const ItemsModule=(function(){
    let items=[]

        return {
          addItem:function(item){
              items.push(item)
              console.log("Item added")
          },
            removeItem:function (item){
              items=items.filter(i=>i!==item)
                console.log("Item removed")
            },
            listItems:function (){
                items.forEach(i=>console.log(i))
            }
        }
    }

)()

ItemsModule.addItem("apple")
ItemsModule.addItem("apple")
ItemsModule.addItem("apple")
ItemsModule.addItem("apple")
ItemsModule.removeItem("apple")
ItemsModule.listItems()



// Memoization
function memoize(fn){
    const cache=new Map()

    return function (...args){
        const key=JSON.stringify(args)
        if (cache.has(key)) return cache.get(key)

        const res=fn(...args)
        cache.set(key,res)
        return res
    }
}

const factorial=memoize(function(n){
    if(n<=1) return 1
    return n*factorial(n-1)
})

console.log(factorial(5))


