function timeConvert(n){
    let hours=n/60;
    let rhours=Math.floor(hours);

    let min=(hours-rhours)*60;
    let rmin=Math.round(min);

    console.log(`The time is ${rhours} hours and ${rmin} minutes`);
}

timeConvert(200);