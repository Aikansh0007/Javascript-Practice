class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length===0){
            return "Underflow";
        }
        return this.items.pop();
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    printStack() {
        console.log(this.items.join(", "));
    }

    
    insertAtBottom(element){
        if(this.isEmpty())
            this.push(element);
        else{
            const temp=this.pop();
            this.insertAtBottom(element);
            this.push(temp);
        }
    }
    reverse(){
        if(!this.isEmpty()){
            const temp=this.pop();
            this.reverse();
            this.insertAtBottom(temp);
        }
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack:");
stack.printStack();

stack.reverse();

console.log("Reversed Stack:");
stack.printStack();