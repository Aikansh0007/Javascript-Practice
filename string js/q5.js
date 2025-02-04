function abbrName(str){
    let words=str.split(" ");
    let abbr="";
    abbr+=words[0];
    abbr+=" ";
    for(let i=1;i<words.length;i++){
        let word=words[i];
        abbr+=word[0];
        abbr+=".";
        abbr+=" ";
    }
    return abbr;
}

console.log(abbrName("Aikansh Anil Shridhar"));