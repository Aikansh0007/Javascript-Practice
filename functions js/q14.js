function coins(amount,coins){
    var result=[];
    coins.sort((a,b)=>b-a);

    for(var i=0;i<coins.length;i++){
        while(amount>=coins[i]){
            result.push(coins[i]);
            amount-=coins[i];
        }
    }
    return result;
}

const result=coins(67,[25,10,5,2,1]);
console.log(result);