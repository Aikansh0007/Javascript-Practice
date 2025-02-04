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
    displayStack(){
        console.log("Stack Elements are : ");
        console.log(this.items.join(" "));
    }
    sortDescending(inputStack){
        const auxilliaryStack=new Stack();

        while(!inputStack.isEmpty()){
            let elem=inputStack.pop();
            while(!auxilliaryStack.isEmpty() && auxilliaryStack.peek()<elem){
                inputStack.push(auxilliaryStack.pop());
            }
            auxilliaryStack.push(elem);
        }
        while(!auxilliaryStack.isEmpty()){
            inputStack.push(auxilliaryStack.pop());
        }
    }
    reverse(){
        this.items=this.items.reverse();
    }
}
const stack = new Stack();
stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log("Original Stack:");
stack.displayStack();

stack.sortDescending(stack);

console.log("Sorted Stack in Descending Order:");
stack.displayStack();