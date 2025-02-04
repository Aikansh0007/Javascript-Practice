function checkpower10(num){
    if(num=='0')
        return false;
    if(num[0]=='1'&& parseInt(num)%10==0){
        return true;
    }
    return false;
}
console.log(checkpower10('10000'));
console.log(checkpower10('2000'));
