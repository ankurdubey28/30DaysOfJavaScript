class Queue{
    constructor() {
        this.arr=[]
        this.top=0
    }
    enqueue(val){
        this.arr.push(val)
    }
    dequeue(){
        if(this.isEmpty()) return -1
        this.top++
        return this.arr.shift()
    }
    peek(){
        return this.arr[this.top]
    }
    isEmpty(){
        return this.arr.length===0
    }
}

// const q=new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
//
// console.log(q.peek())


// use case

const q=new Queue()
const arr=[1,2,3,4]
for(let val of arr){
    q.enqueue(val)
}
console.log(q)

while (!q.isEmpty()){
    console.log(`printing job with id ${q.dequeue()}`)
}