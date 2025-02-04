var str=prompt("Enter the string");
var n=str.length;
var ind=Number(prompt("Enter the index : "));
if(ind>n-1){
    alert("Invalid Index");
}
else{
    str=str.slice(0,ind)+str.slice(ind+1);
    alert(str);
}

