// Basic Error Handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Caught an exception: " + error.message);
}



// Finally block - block which runs irrespective of the fact
// whether error was thrown or not. used for releasing resources
function func(){
    try{
        console.log("my name is anothony")
        //throw new Error("error")
    }catch (err){
        console.log(err.message)
    }finally {
        console.log("will always print")
    }
}

func()


//Promise and Error handling
const promise=new Promise((resolve, reject) =>{
    let rand=Math.ceil(Math.random()*10)+1;
    console.log(rand)
    if(rand<=5) setTimeout(()=>resolve("completed"),3000)
    else setTimeout(()=>reject("Rejected"),3000)
})

promise.
    then(data=>{
    console.log(data)
}).catch(data=>{
    console.log(data)
})

// Async await and Error handling
async function func2(){
    try{
        const res=await promise
        console.log(res)
    }catch (err){
        console.log(err)
    }
}
func2()


// Error handling in fetch api
// already done in day 11