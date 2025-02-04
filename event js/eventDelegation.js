const listContainer=document.createElement('ul');
listContainer.id='dynamic-list';
document.body.appendChild(listContainer);

function addListItem(content){
    const newItem=document.createElement('li');
    newItem.textContent=content;
    listContainer.appendChild(newItem);
}

addListItem('Item1');
addListItem('Item2');
addListItem('Item3');

listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        alert(`You Clicked On : ${event.target.textContent}`);
    }
});

listContainer.style.cursor='pointer';

