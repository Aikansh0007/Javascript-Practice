function toCamelize(str){
    let words=str.trim().split(' ');
    for(let i=1;i<words.length;i++){
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase();
    }
    return words.join('');
}

console.log(toCamelize("JavaScript Exercises"));
console.log(toCamelize("JavaScript exercises"));
console.log(toCamelize("JavaScriptExercises"));