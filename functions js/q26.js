function longestsubs(str){
    let lonsubs="";
    let start=0;
    let maxlen=0;
    let charmap={};

    for(let end=0;end<str.length;end++){
        const char=str[end];
        if(charmap[char]>=start){
            start=charmap[char]+1;
        }
        charmap[char]=end;
        const length=end-start+1;
        if(length>maxlen){
            maxlen=length;
            lonsubs=str.slice(start,end+1);
        }
    }
    return lonsubs;
}
const res=longestsubs('aikanshshridhar');
console.log(res);