function removeFalsy(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0 || arr[i]==null || arr[i]==false || arr[i]=='' || arr[i]==undefined || Number.isNaN(arr[i])){
            arr.splice(i,1);
            i--;
    }
}
return arr;
}

console.log(removeFalsy( [NaN, 0, 15, false, -22, '',undefined, 47, null]))