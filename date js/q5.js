function compareDates(date1,date2){
    var year1=date1.getYear();
    var year2=date2.getYear();

    var month1=date1.getMonth();
    var month2=date2.getMonth();

    var day1=date1.getDay();
    var day2=date2.getDay();

    if(year1>year2){
        return 1;
    }
    else if(year1<year2){
        return -1;
    }
    else{
        if(month1>month2){
            return 1;
        }
        else if(month2>month1){
            return -1;
        }
        else{
            if(day1>day2){
                return 1;
            }
            else if(day2>day1){
                return -1;
            }
            else{
                return 0;
            }
        }
    }
}
date1=new Date("12/14/2013");
date2=new Date("11/14/2013");
var res=compareDates(date1,date2);

if(res==1)
    console.log("Date1>Date2");
else if(res==-1){
    console.log("Date2>Date1");
}
else{
    console.log("Date1=Date2");
}