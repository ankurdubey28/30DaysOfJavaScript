// Promise chaining is not adding multiple .then handlers to single promise
// rather each level throws new promise for next level to handle it is called
// promise chaining. useful then another async operation needs to completed
// right after previous has been completed.


// this is an traditional example promise chaining
fetch("https://fakerapi.it/api/v1/books?_quantity=1").
    then(res=>{
        return res.json()
}).then((data)=>{
    console.log(data.data)
})


const promise1=new Promise(resolve => {
    setTimeout(()=>resolve(1),1000)
})
const promise2=new Promise(resolve => {
    setTimeout(()=>resolve(2),1000)
})
const promise3=new Promise((resolve,reject) => {
    setTimeout(()=>reject(3),1000)
})


promise1.then(data=>{
    console.log(data)
    return promise2
}).then(data=>{
    console.log(data)
    return promise3
}).then(data=>{
    console.log(data)
}).catch(e=>{
    console.log(e)
})



