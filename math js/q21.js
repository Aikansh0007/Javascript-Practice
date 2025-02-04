function toRoman(num){
    const roman=[
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], 
        ["", "M", "MM", "MMM"]
    ];
    let res='';
    let place=0;

    while(num>0){
        const dig=num%10;
        res=roman[place][dig]+res;
        num=Math.floor(num/10);
        place++;
    }
    return res;
}

console.log(toRoman(27));