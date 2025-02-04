function nextOf5(num){
    var num=Math.floor(num);
    var rem=num%5;

    return num+rem+1;
}

console.log(nextOf5(32));
console.log(nextOf5(137));