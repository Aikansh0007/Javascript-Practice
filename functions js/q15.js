function expo(base,exp){
    if(exp==0){
        return 1;
    }
    return base*expo(base,exp-1);
}
var result=expo(2,5);
console.log(result);