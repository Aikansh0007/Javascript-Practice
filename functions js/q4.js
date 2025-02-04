function sortString(str){
    let arr = str.split("");
    let n = arr.length;
    arr=arr.sort();
    str=arr.join("");

    return str;
}
console.log(sortString("webmaster"));