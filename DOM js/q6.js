function changeContent(){
    row=window.prompt('Input the row number(0,1,2)');
    col=window.prompt('Input the column number(0,1,2)');
    content=window.prompt('Input the cell content');

    var x=document.getElementById('myTable').rows[parseInt(row,10)].cells;
    x[parseInt(col,10)].innerHTML=content;
}