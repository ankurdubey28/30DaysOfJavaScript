class Node{
    constructor(val,next=null) {
        this.val=val
        this.next=next
    }
}

class LinkedList{
    constructor() {
        this.root=null
    }
    add(val){
        let node=new Node(val)
        if(this.root==null) this.root=node;
        else{
           let current=this.root
            while(current.next!=null){
               current=current.next
            }
            current.next=node
        }
    }
    remove(val){
        if(this.root==null) return -1
        if (this.root.val === val) {
            this.root = this.root.next;
            return;
        }
        let current=this.root
        while (current.next!=null && current.next.val!==val){

            current=current.next;
        }
        if(current.next!=null){
            current.next=current.next.next;
        }
    }
   display(root){
        if(root==null) return

       while(root!==null){
          process.stdout.write(root.val+"->")
            root=root.next
       }
        process.stdout.write("NULL")
   }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(JSON.stringify(list));

list.remove(2);

console.log(JSON.stringify(list));

list.display(list.root)
