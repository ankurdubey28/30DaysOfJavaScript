// Async Await syntax
async function func1(){
    const res= await new Promise(resolve => {
        setTimeout(() => resolve("done"), 5000)
    })
    console.log(res)
}
func1()


async function func2(){
   try{
       const res= await new Promise((resolve,reject) => {
           setTimeout(()=>reject("Issue"),6000)
       })
       console.log(res)
   }catch (e){
       console.log(e)
   }
}
func2()



// Data Fetching
async function FetchData(){
    const res=await fetch("https://fakerapi.it/api/v1/books?_quantity=1")
    const data=await res.json()
    console.log(data.data)
}

FetchData()




