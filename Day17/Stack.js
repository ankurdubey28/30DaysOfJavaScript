class Stack{

    constructor() {
         this.arr=[]
        this.top=-1
    }
    push(val){
         this.arr.push(val)
        this.top++;
    }
    pop(){
        if(this.isEmpty()){
            console.log("empty stack")
        }
        this.top--;
        return this.arr.pop();
    }
    peek(){
       if(this.isEmpty()) return -1
        return this.arr[this.top]
    }
    isEmpty(){
        return this.top===-1
    }
}

// const st=new Stack()
// st.push(1)
// st.push(2)
// st.push(3)
// st.pop()
// console.log(st.peek())


// use case
let name="oneplus"
let ans=""
const st=new Stack();
for(let char of name){
    st.push(char)
}

while(!st.isEmpty()){
    ans+=st.pop();
}
console.log(ans)


