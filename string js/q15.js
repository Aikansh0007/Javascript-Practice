function HumanizeFormat(num){
    var str=num.toString();
    var len=str.length;
    const suff=['th','st','nd','rd','th'];
    if(str[len-1]=='1')
        return str+'st';
    else if(str[len-1]=='2')
        return str+'nd';
    else if(str[len-1]=='3')
        return str+'rd';
    else
        return str+'th';
}

console.log(HumanizeFormat(21));
console.log(HumanizeFormat(8));
console.log(HumanizeFormat(301));
console.log(HumanizeFormat(402));
console.log(HumanizeFormat(5600));
