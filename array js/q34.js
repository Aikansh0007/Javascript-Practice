function nlargest(arr,n){
    var max=0;
    for(var i=0;i<n;i++){
        max=-Infinity;
        let maxIndex=-1;
        for(let j=0;j<arr.length;j++){
            if(arr[j]>max){
                max=arr[j];
                maxIndex=j;}
        }
        arr.splice(maxIndex,1);
    }
    return max;
}
const arr=[43,56,23,89,88,90,99,652];
var n=4;
console.log(nlargest(arr,n));
