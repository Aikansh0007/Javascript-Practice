function isPower(num){
    var ans=Math.log2(num);
    return (ans%1===0);
}
console.log(isPower(16));
console.log(isPower(18));
console.log(isPower(256));
