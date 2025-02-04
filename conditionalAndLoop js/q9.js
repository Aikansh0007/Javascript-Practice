function Armstrong(num){
    let res=0;
    var dum=num;
    while(num>0){
        var dig=num%10;
        res+=dig**3;
        num=Math.floor(num/10);
    }
    if(res==dum){
        return true;
    }
    return false;
}

console.log(Armstrong(371));