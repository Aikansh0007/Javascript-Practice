function giveDays(month,year){
    const months={
        "January":31,
        "February":28,
        "March":31,
        "April":30,
        "May":31,
        "June":30,
        "July":31,
        "August":31,
        "September":30,
        "October":31,
        "November":30,
        "December":31
    }

    const monthNames=["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    if(year%4==0 && month==2){
        return 29;
    }
    const monthName=monthNames[month-1];
    return months[monthName];
}

    console.log(giveDays(1, 2012));
    console.log(giveDays(2, 2012));

    


