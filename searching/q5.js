function interpolationSearch(arr,target){
    let low=0;
    let high=arr.length-1;

    while(low<=high && target>=arr[low] && target<=arr[high]){
        const pos=low+Math.floor(((target-arr[low])*(high-low))/(arr[high]-arr[low]));
        if(arr[pos]==target){
            return pos;
        }
        else if(arr[pos]<target)
            low=pos+1;
        else
            high=pos-1;
    }
    return -1;

}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.log(interpolationSearch(arr, 15)); 
console.log(interpolationSearch(arr, 1));  
console.log(interpolationSearch(arr, 21)); 
console.log(interpolationSearch(arr, 4));  