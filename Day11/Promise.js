// Promise basics
const promise=new Promise((resolve, reject) => {
    // setTimeout(()=>resolve("Resolved"),2000)
    setTimeout(()=>reject("Internal Error"),2000)
})
promise.then(data=>{
    console.log(data)
}).catch(err=>{
    console.error(err)
})

// Data Fetching
function FetchData(){
    fetch("https://fakerapi.it/api/v1/books?_quantity=1").
        then(res=>{
            return res.json()
    }).then(data=>{
        console.log(data.data)
    })
}
FetchData()


// concurrent Promises
const promise1=new Promise((resolve)=>{
    setTimeout(()=>resolve(1),1000)
})
const promise2=new Promise((resolve)=>{
    setTimeout(()=>resolve(2),2000)
})
const promise3=new Promise((resolve)=>{
    setTimeout(()=>resolve(3),3000)
})
const promise4=new Promise((resolve)=>{
    setTimeout(()=>resolve(4),4000)
})
const promise5=new Promise((resolve)=>{
    setTimeout(()=>resolve(5),5000)
})

Promise.all([promise1,promise2,promise3,promise4,promise5]).
    then(data=>data.forEach(i => console.log(i)))

Promise.race([promise1,promise2,promise3,promise4,promise5]).
    then(data=>
    console.log(`the first promise to resolve is promise${data}`))