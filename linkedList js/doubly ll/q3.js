class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(value=null){
        if(value!==null){
            this.head=new Node(value);
            this.tail=this.head;
            this.length=1;
        }
        else{
            this.head=null;
            this.tail=null;
            this.length=0;
        }
    }
    add(newNode){
        if(this.head==null){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
    }
    printList(){
        let curr=this.head;
        let res=[];
        while(curr!==null){
            res.push(curr.value);
            curr=curr.next;
        }
        console.log(res.join(' '));
        return this;
    }
    isEmpty(){
        return this.length === 0;
    }
}

let numList = new DoublyLinkedList();

numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));

numList.printList();
var ans=numList.isEmpty()
console.log(ans);