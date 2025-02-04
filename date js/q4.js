function monthName(date){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
    return months[date.getMonth()];
}
console.log(monthName(new Date("10/11/2009")));
