const div=document.createElement('div');
div.style.height='100px';
div.style.width='200px';
div.style.border='5px solid black';
div.addEventListener('mouseover',()=>{
    div.style.backgroundColor='red';
});
div.addEventListener('mouseout',()=>{
    div.style.backgroundColor='white';
})

document.body.appendChild(div);