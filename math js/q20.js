function getFactorial(num){
    if(num === 0 || num === 1)
        return 1;
    
    return num*getFactorial(num-1);
}

function binomial(n,k){
    var num=getFactorial(n);
    var deno=getFactorial(k);
    var deno2=getFactorial(n-k);
    var deno3=deno*deno2;
    return Math.floor(num/deno3);
}

console.log(binomial(8,3));
