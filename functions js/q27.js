function validpal(str){
    var rev=str.split("").reverse().join("");
    return str==rev;
}

function lonpal(str){
    var max_len=0;
    var maxpal='';

    for(var i=0;i<str.length;i++){
        var subs=str.substr(i,str.length);
        for(var j=subs.length;j>=0;j--){
            var sub_sub_str=subs.substr(0,j);
            if(sub_sub_str.length<=1)
                continue;
            if(validpal(sub_sub_str)){
                if(sub_sub_str.length>max_len){
                    max_len=sub_sub_str.length;
                    maxpal=sub_sub_str;
                }
            }
        }
    }
    return maxpal;
}

const ans=lonpal("bananas");
console.log(ans);