function createTable(){
    var rn=prompt("Enter the row number");
    var cn=prompt("Enter the column number");

    rn=parseInt(rn,10);
    cn=parseInt(cn,10);

    var table=document.getElementById('myTable');
    for(let i=0;i<rn;i++){
        var row=table.insertRow(i);
        for(let j=0;j<cn;j++){
            var cell=row.insertCell(j);
            cell.innerHTML="Row-"+(i+1)+" Column-"+(j+1);
        }
    }
}
