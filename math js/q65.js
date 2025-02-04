function findLucas(ind){
    var x=2,y=1;
    for(var i=0;i<ind;i++){
        var temp=x+y;
        x=y;
        y=temp;
    }
    return x;
}

console.log(findLucas(7));