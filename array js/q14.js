var arr=[1,2,2,4,5,4,7,8,7,3,6];
str=arr.toString();
console.log(str);

var n=str.length;

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
        }
    }
}
console.log(arr);