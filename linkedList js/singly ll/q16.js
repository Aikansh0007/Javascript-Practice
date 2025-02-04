class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(head=null){
        this.head=head
    }
    add(newNode){
        let node=this.head;
        if(node==null){
            this.head=newNode
            return;
        }
        while(node.next){
            node=node.next;
        }
        node.next=newNode;
    }
    displayList(){
        let node=this.head;
        var str='';
        while(node){
            str+=node.data+' ';
            node=node.next;
        }
        str+='NULL';
        console.log(str);
    }
    toString(){
        let node=this.head;
        var str='';
        while(node){
            str+=node.data+' ';
            node=node.next;
        }
        return str;
    }
}
let numList = new SinglyLinkedList();

numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();

var str=numList.toString();
console.log(str);
