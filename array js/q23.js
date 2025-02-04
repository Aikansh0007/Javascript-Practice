function diff(arr1,arr2){
    var res=[];
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            res.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            res.push(arr2[i]);
        }
    }
    return res;
}

console.log(diff([1,2,3],[100,2,1,10]));