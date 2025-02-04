function insertdash(num){
    const numStr=num.toString();
    let result="";

    for(let i=0;i<numStr.length;i++){
        result+=numStr[i];
        if(i<numStr.length-1 && parseInt(numStr[i])%2==0 && parseInt(numStr[i+1])%2==0){
            result+="-";
        }
    }
    return result;
}
console.log(insertdash('025468'));