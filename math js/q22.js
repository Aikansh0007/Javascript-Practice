function toInteger(num){
    const roman={
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let tot=0;
    let prev=0;

    for(let i=num.length-1;i>=0;i--){
        const curr=roman[num[i]];
        if(curr<prev){
            tot-=curr;
        }
        else{
            tot+=curr;
        }
        prev=curr;
    }
    return tot;
}

console.log(toInteger("III"));