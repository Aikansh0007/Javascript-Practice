function palindrome(str){
    var n=str.length;
    if(n<=1){
        return true;
    }
    if(str[0]!==str[n-1]){
        return false;
    }
    else{
        return palindrome(str.slice(1,n-1));
    }
}

console.log(palindrome("aikansh"));