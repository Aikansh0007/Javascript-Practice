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
    insertNew(pos,newNode){
        if(pos<0 || pos>this.length){
            console.log("Invalid Position");
            return;
        } 
        else if(pos==0){
            newNode.next=this.head;
            if(this.head)
                this.head.prev=newNode;
            this.head=newNode;
            

        }
        else if(pos===this.length){
            this.add(newNode);
        }
        else{
            let curr=this.head;
            var cnt=1;
            while(cnt<pos){
                cnt++;
                curr=curr.next;
            }
            newNode.next=curr.next;
            newNode.prev=curr;
            if(curr.next){
                curr.next.prev=newNode;
            }
            curr.next=newNode;
        }
        this.length++;
    }
}


let numList = new DoublyLinkedList();

numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));

numList.insertNew(3,new Node(10));
numList.printList();
