function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            right.push(arr[i]);
        }
        else{
            left.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    const mid=Math.floor(arr.length/2);
    const left=arr.slice(0,mid);
    const right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let sortedArray=[];
    let i=0,j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sortedArray.push(left[i]);
            i++;
        }
        else{
            sortedArray.push(right[j]);
            j++;
        }
    }
    return [...sortedArray,...left.slice(i),...right.slice(j)];
}

function heapSort(arr){
    let n=arr.length;

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0);
    }
    return arr;
}

function heapify(arr,n,i){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;

    if(left<n && arr[left]>arr[largest])
        largest=left;

    if(right<n && arr[right]>arr[largest])
        largest=right;

    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr,n,largest);
    }

}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[i];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}

function bubbleSort(arr){
    let swapped;
    for(let i=0;i<arr.length;i++){
        swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[i]){
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;

                swapped=true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex])
                minIndex=j;
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return arr;
    
}

function countingSort(arr,min,max){
    var i,z=0,count=[];

    for(i=min;i<=max;i++){
        count[i]=0;
    }
    for(i=0;i<arr.length;i++){
        count[arr[i]]++;
    }
    for(i=min;i<=max;i++){
        while(count[i]-->0){
            arr[z++]=i;
        }
    }
    return arr;
}

const array = [8, 3, 1, 7, 4, 6, 2, 5];
console.log(quickSort(array));
console.log(mergeSort(array));
console.log(heapSort(array));
console.log(insertionSort(array));
console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(countingSort(array,1,8));