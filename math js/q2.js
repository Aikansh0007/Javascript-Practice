function binToDec(num){
    let dec=0;
    var n=num.length;
    while(n--){
        dec+=parseInt(num[n])*Math.pow(2,n);
    }
    return dec;
}

console.log(binToDec('110011'));