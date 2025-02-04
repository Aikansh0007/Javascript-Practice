function unzip(arr1){
    let str=[];
    let bool=[];
    let num=[];

    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1[i].length;j++){
            if(typeof arr1[i][j] === 'string')
                str.push(arr1[i][j]);
            else if(typeof arr1[i][j] === 'number')
                num.push(arr1[i][j]);
            else if(typeof arr1[i][j] === 'boolean')
                bool.push([arr1[i][j]]);
        }
        
    }
    
    let res=[[str],[num],[bool]];
    return res;
}

console.log(unzip([['a', 1, true], ['b', 2, false]]));