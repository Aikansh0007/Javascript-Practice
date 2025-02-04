function sumOfSq(num){
    let sum=0;
    while(num>0){
        const dig=num%10;
        sum+=dig*dig;
        num=Math.floor(num/10);
    }
    return sum;
}


function isHappyNum(num){
    const seenNum=new Set();

    while(num!==1){
        if(seenNum.has(num)){
            return false;
        }
        seenNum.add(num);
        num=sumOfSq(num);
    }
    return true;
}


function findHappyNumber(count){
    const happyNum=[];
    var num=1;
    while(happyNum.length<count){
        if(isHappyNum(num))
            happyNum.push(num);
        num++;
    }
    return happyNum;
}

const ans=findHappyNumber(5);
console.log(ans);