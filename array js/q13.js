var i=0;
var arr=Array();


function addElem(){
    arr[i]=document.getElementById("text").value;
    alert("Element : "+arr[i]+" added to the array at index "+i);
    i++;
    document.getElementById("text").value="";
}
function display_arr(){
    var e="<hr/>";
    for(var j=0;j<arr.length;j++){
        e+="Element "+j+"= "+arr[j]+"<br/>";
    }
    document.getElementById("Result").innerHTML=e;

}

   