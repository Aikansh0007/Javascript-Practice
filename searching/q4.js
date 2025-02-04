function jumpSearch(arr,target){
    const n=arr.length;
    const step=Math.floor(Math.sqrt(n));
    let prev=0;
    let current=step;

    while(current<n && arr[Math.min(current,n)-1]<target){
        prev=current;
        current+=step;

        if(prev>=n)
            return -1;

    }
    for(let i=prev;i<Math.min(current,n);i++){
        if(arr[i]===target)
            return i;
    }
    return -1;
}

const arr = [1, 3, 4, 7, 10, 14, 18, 23, 27, 31, 36, 40];
console.log(jumpSearch(arr, 18)); 
console.log(jumpSearch(arr, 27)); 
console.log(jumpSearch(arr, 2));  