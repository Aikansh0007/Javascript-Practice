function getDateDiff(date1,date2){
    const diffInMS=date1-date2;
    const diffInDays=diffInMS/(1000*60*60*24);

    return diffInDays;
}
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-02-01");

console.log(getDateDiff(date1, date2));