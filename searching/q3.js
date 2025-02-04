function TernarySearch(arr,target,left,right){
    if(right>=left){
        let mid1=Math.floor(left+(right-left)/3);
        let mid2=Math.floor(right-(right-left)/3);

        if(arr[mid1]==target)
            return mid1;
        else if(arr[mid2]==target)
            return mid2;
        if(arr[mid1]>target)
            return TernarySearch(arr,target,left,mid1-1);
        else if(target>arr[mid2])
            return TernarySearch(arr,target,mid2+1,right);
        else
            return TernarySearch(arr,target,mid1+1,mid2-1);

        
    }
    return -1;
}

console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0, 5))
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, 8))
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0, 8))
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6, 8))