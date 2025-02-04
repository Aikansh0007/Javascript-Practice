function indNaN(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        isNaN(arr[i])?res.push(i):null;
    }
    return res;
}
var res=indNaN([2,NaN,8,16,32,NaN]);
console.log(res);
