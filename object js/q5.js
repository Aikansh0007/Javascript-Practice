cylinder={
    rad:4,
    height:9,
};

function volume(obj){
    return Math.PI * obj.rad * obj.rad * obj.height;
}

console.log(volume(cylinder));