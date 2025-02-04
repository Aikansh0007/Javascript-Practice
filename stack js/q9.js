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

    top(){
        if(!this.isEmpty)
            return this.items[this.items.length-1];
        else
            return "Add elements";
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
    min(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let min=this.items[0];
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]<min){
                min=this.items[i];
            }
        }
        return min;
    }
    max(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let max=this.items[0];
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]>max){
                max=this.items[i];
            }
        }
        return max;
    }
    contains(item) {
        return this.items.includes(item);
    }
    removeDuplicate(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let newStack=new Stack();
        for(let i=0;i<this.items.length;i++){
            if(!newStack.contains(this.items[i])){
                newStack.push(this.items[i]);
            }
    }
    return newStack;
}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(4);

console.log("Original Stack:");
stack.printStack();

stack.reverse();

console.log("Reversed Stack:");
stack.printStack();

console.log(stack.min());
console.log(stack.max());

console.log(stack.removeDuplicate());
