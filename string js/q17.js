function chop(str,len){
    const arr=[];
    var i=0;
    while(i<str.length){
        var temp=len;
        var char='';
        while(temp-- && i<str.length){
            char+=str[i];
            i++;
        }
        arr.push(char);
    }
    return arr;
}

console.log(chop('Aikansh',2));