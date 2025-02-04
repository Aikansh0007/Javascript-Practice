function move(arr,fromind,toind){
    if(fromind<0) fromind=arr.length+fromind;
    if(toind<0) toind=arr.length+toind;

    const elem=arr.splice(fromind,1)[0];
    arr.splice(toind,0,elem);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));