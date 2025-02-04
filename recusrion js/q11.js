function binToDec(num,idx=0){
    if(idx>=num.length){
        return 0;
    }
    const currdig=parseInt(num[num.length-1-idx]);
    const posval=currdig*Math.pow(2,idx);

    return posval+binToDec(num,idx+1);
}
const ans=binToDec('11011');
console.log(ans);