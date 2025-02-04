var name1=document.getElementById('name');
var button=document.getElementById('button');

button.addEventListener('click',()=>{
    if(name1.value==='')
        alert("Enter Valid Name");
    else
        alert("Hello "+name1.value);
});

