function selfDiv(num){
    if(num==0){
        return false;
    }
    var temp=num;
    while(temp){
        a=temp%10;
        if(num%a!=0){
            return false;
        }
        temp=Math.floor(temp/10);
    }
    return true;
}

console.log(selfDiv(48));
console.log(selfDiv(63));
