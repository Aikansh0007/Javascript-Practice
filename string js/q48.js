function successor(str){
    if(str.length===0) return "a";

    let arr=str.split("");
    let i=arr.length-1;

    while(i>=0){
        let char=arr[i];
        if(/[0-9]/.test(char)){
            if(char==='9'){
                arr[i]='0';
            }
            else{
                arr[i]=String.fromCharCode(char.charCodeAt(0)+1);
                return arr.join("");
            }
        }
        else if(/[a-z]/.test(char)){
            if(char==='z'){
                arr[i]='a';
            }
            else{
                arr[i]=String.fromCharCode(char.charCodeAt(0)+1);
                return arr.join("");
            }
        }
        else if(/[A-Z]/.test(char)){
            if(char==='Z'){
                arr[i]='A';
            }
            else{
                arr[i]=String.fromCharCodeAt(char.charCodeAt(0)+1);
                return arr.join("");
            }
        }
        else{
            i--;
            continue;
        }
        i--;
    }
    if(/[0-9]/.test(str[0])) return "1"+arr.join("");
    if(/[a-z]/.test(str[0])) return "a"+arr.join("");
    if(/[A-Z]/.test(str[0])) return "A"+arr.join("");

    return arr.join("");
}

console.log(successor("abc"));