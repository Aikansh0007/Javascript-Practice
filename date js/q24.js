function daysPassed(date){
    let month=date.getMonth();
    let day=date.getDate();
    let year=date.getFullYear();

    const num=[31,28,31,30,31,30,31,31,30,31,30,31];
    const numLeap=[31,29,31,30,31,30,31,31,30,31,30,31];

    var days=0;
    for(var i=0;i<month;i++){
        days+=num[i];
    }
    if(year%4==0 && month>1){
        return days+day+1;
    }
    return days+day;
}

const date=new Date(2015,10,1);
var weekNum=Math.floor((daysPassed(date))/7);
console.log(weekNum+1);