function checkPal(str){
    var i=0;
    var j=str.length-1;

    while(i<j){
        if(str[i]!=str[j]){
            var check=false;
            return check;
        }
        return true;
    }
}
console.log(checkPal("aikansh"));