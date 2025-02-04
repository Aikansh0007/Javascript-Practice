function rev(n){
    var str=n.toString();
    str=str.split("");
    str=str.reverse();
    str=str.join("");
    return str;
}
console.log(rev(12345));
