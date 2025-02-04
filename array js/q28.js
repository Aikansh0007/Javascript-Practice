function lcss(str1,str2){
    let m=str1.length;
    let n=str2.length;
    var str=''
    var i=0;
    while(str1[i]==str2[i]){
        str+=str1[i];
        i++;
    }
    return str;
}

console.log(lcss('lcss','aikansh'));