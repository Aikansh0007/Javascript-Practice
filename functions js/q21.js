function sublength(arr,len){
    const result=[];
    function backt(start,currentSubset){
        if(currentSubset.length===len){
            result.push([...currentSubset]);
            return;}
        for(let i=start;i<arr.length;i++){
            currentSubset.push(arr[i]);
            backt(i+1,currentSubset);
            currentSubset.pop();
        }
    }
    backt(0,[]);
    return result;
}

const res=sublength([1,2,3],2);
console.log(res);