class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null
        };
        this.length=0;
        this.tail=this.head;
    }
    add(newNode){
        this.tail.next=newNode;
        newNode.previous=this.tail;
        this.tail=newNode;
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
}

let numList = new DoublyLinkedList();

numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));

numList.printList();