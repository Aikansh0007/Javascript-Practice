function range(x,y){
    if(x==y){
        return;
    }
    console.log(x+1);
    range(x+1,y)

}
range(2,9);