function paddingString(str1,str2,dir){
    str2=str2.toString();
    if(dir === 'left')
        return (str1+str2).slice(-str1.length);

    else{
        return (str1+str2).substring(0,str1.length);
    }
}

console.log(paddingString('0000',123,'left'));
