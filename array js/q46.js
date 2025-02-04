function permute(arr){
    if(arr.length === 1) return arr;
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        let p = permute(rest);
        for(let j = 0; j < p.length; j++){
            result.push([arr[i]].concat(p[j]));
            }
        }
    return result;
}

console.log(permute([1,33,5]));