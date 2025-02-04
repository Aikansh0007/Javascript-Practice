function small(n){
    if(n<10) return n;
    let factor=[];
    for(let i=9;i>1;i--){
        while(n%i==0){
            factor.push(i);
            n/=i;
        }
    }
    if(n>1) return 0;

    factor.sort((a,b)=>a-b);
    return parseInt((factor.join("")));
}

console.log(small(100));