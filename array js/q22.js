function union(arr1,arr2){
    var res=[];
    res=arr1.concat(arr2);
    res.sort(function(a,b){return a-b});
    var n=res.length;
    for(var i=0;i<n;i++){
        if(res[i]==res[i+1]){
            res.splice(i,1);
        }
    }
    return res;
}
console.log(union([1,2,3],[100,2,1,10]));