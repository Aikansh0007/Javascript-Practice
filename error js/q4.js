function negNum(num){
    if(num<0){
        throw new Error("Negtive num not allowed");

    }
    return num;
}

console.log(negNum(3));
console.log(negNum(-3));
