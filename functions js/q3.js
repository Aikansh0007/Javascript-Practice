function comb(str){
    const result=[];
    function helper(prefix,remaining){
        if(!remaining){
            if(prefix) result.push(prefix);
            return;
        }
        helper(prefix+remaining[0],remaining.slice(1));
        helper(prefix,remaining.slice(1));

    }

    helper('',str);
    return result;
}

console.log(comb("abc"));