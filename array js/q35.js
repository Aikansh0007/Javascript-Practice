function getRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

console.log(getRandom([1,2,3,4,5,6,7,8,9,10]));