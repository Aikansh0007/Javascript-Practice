function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("success");
        },3000);
    });
}
console.log("Getting Data1....");


//Simple Promise Chaining

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     console.log("Getting Data2....");
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });


//Real Promise Chaining

getData(1)
    .then((res)=>{
    console.log("Getting Data 2...");
    return getData(2);
})
.then((res)=>{
    console.log("Getting Data 3...");
    return getData(3);
})
.then((res)=>{
    console.log(res);
})

