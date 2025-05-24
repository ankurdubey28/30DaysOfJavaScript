// const id=setInterval(callback,500,"1","2")
//
// function callback(a,b){
//     console.log("hi")
//     console.log(a)
//     console.log(b)
// }
//
// clearInterval(id)

const person={
    name:"alice",
    greet(){
        console.log(this.name)
    }
}


// Find why the first function does not work while the second works
// setInterval(person.greet,500)
// setInterval(()=>person.greet(),500)
// The second one works because we are passing a wrapper arrow function around
// actual method which is called inside, which sets up the context and resolve
// this correctly. In fact instead of arrow function even normal function can be given
// and things would work fine.




setTimeout(()=>function (){
    console.log("hello")
}(),500)

