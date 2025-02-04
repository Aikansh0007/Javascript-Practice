function genranID(num){
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result="";

    for(let i=0;i<num;i++){
        const ind=Math.floor(Math.random()*characters.length);
        result+=characters[ind];
    }
    return result;
}
const res=genranID(6);
console.log(res);