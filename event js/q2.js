dropDown=document.createElement('select');
dropDown.textContent='DropDown';

const option1=document.createElement('option');
option1.value='option1';
option1.textContent='Option 1';

const option2=document.createElement('option');
option2.value='option2';
option2.textContent='Option 2';

dropDown.appendChild(option1);
dropDown.appendChild(option2);

document.body.appendChild(dropDown);

