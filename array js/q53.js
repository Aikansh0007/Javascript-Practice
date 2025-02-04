function arrInsideArr(arr){
    return arr.filter(n=>Array.isArray(n)).length;
}

console.log(arrInsideArr([2,8,[6,3,3],[4],5,[3,4,[5,4]]]))