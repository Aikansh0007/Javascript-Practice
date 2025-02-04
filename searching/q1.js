function findWordPositions(str,word){
    const lowerStr=str.toLowerCase();
    const lowerWord=word.toLowerCase();
    let positions=[];
    let index=lowerStr.indexOf(lowerWord);

    while(index!==-1){
        positions.push(index);
        index=lowerStr.indexOf(lowerWord,index+1);
    }
    return positions;
}

console.log(findWordPositions("the quick brown fox jumps over the lazy dog.", "cat"));