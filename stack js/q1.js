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
    peek(){
        if(this.items.length===0){
            return "No Elements in Stack";
        }
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    displayStack(stack){
        console.log("Stack Elements are : ");
        let str='';
        for(let i=0;i<this.items.length;i++){
            str+=stack.items[i]+' ';
        }
        return str.trim();
    }
}

console.log("Initialize a stack:")
let stack = new Stack();
console.log("Is the stack empty?");
console.log(stack.isEmpty()); 
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.displayStack(stack));
console.log("Top of the element of the stack:");
console.log(stack.peek()); 
console.log("Size of the stack:");
console.log(stack.size()); 
console.log("Remove one element from the stack:")
stack.pop();
console.log(stack.displayStack(stack));
console.log("Top of the element of the stack:");
console.log(stack.peek());  
console.log("Is the stack empty?");
console.log(stack.isEmpty());
console.log("Size of the stack:");
console.log(stack.size());

