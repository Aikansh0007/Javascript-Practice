function perfect(num){
    var arr=[];
    arr.push(1);

    for(var i=2;i<=num;i++){
        if(num%i==0){
            arr.push(i);
        }
    }
    console.log(arr);
    let sum=0
    for(var i=0;i<arr.length-1;i++){
        sum = arr[i] + sum;
    }
    console.log(sum);
    if(sum==num){
        return true;
    }
    return false;
}

console.log(perfect(4))