function flatten(arr,shallow){
    if(shallow){
        return arr.reduce(
            (acc,val)=>acc.concat(val),[]
        );
    }
    else{
        return arr.reduce(
            (acc,val)=>acc.concat(Array.isArray(val)?flatten(val):val),
            []
        );
    }
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));