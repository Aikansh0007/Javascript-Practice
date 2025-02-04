function truncateWords(str,len){
    var words=str.split(" ");
    var result="";
    for(var i=0;i<len;i++){
        result+=words[i];
        result+=" ";
    }
    return result;
}

console.log(truncateWords('The quick brown fox jumps over the lazy dog', 4));