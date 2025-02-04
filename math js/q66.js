function isPrime(n){
    if(n <= 1) return false;
    if(n == 2) return true;
    for(var i=3;i<Math.sqrt(n);i++){
        if(n % i == 0) return false;
    }
    return true;
}

var num=prompt("Enter a number : ");
if(isPrime(num-2)==true){
    console.log(num-2,num);
}
else if(isPrime(num+2)==true){
    console.log(num+2,num);
}
else{
    console.log("-1");
}