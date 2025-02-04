function arrVal(arr,ind){
    try{
        const elem=arr[ind];
        if(elem===undefined){
            console.log("Index out of bounds");
        }
        else{
            console.log(elem);
        }
    }
    catch(err){
        if(err instanceof RangeError){
            console.log("Index out of bounds1");
        }
        else{
            console.log(err.message);
        }
    }
}

arrVal([1,2,3,4,5],1);
arrVal([1,2,3,4,5],11);

