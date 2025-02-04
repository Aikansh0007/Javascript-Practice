function fibbonacci(n){
    const arr=[];
    if(n<=0) return 0;
    else if(n==1) return 1;
    else return (fibbonacci(n-1)+fibbonacci(n-2));
}

const ans=fibbonacci(5);
console.log(ans);
