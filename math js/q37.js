function limit(value,min,max){
    return (value<min)?min:(value>max?max:value);
}

console.log(limit(7,1,12));