const arr=[1,2,1,3,1,4,5,4,3,5,6,7,4,2];

var n=arr.length;
while(n>0){
    index=Math.floor(Math.random()*n);
    n--;
    temp=arr[n];
    arr[n]=arr[index];
    arr[index]=temp;
    
}
console.log(arr);