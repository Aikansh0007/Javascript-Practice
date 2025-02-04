function div(n1,n2){
    if(n2==0){
        throw new Error("Error : Division by 0 not allowed");
    }
    return n1/n2;
}
console.log(div(8,3));
console.log(div(8,0));