function async(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Success");
        },4000);
    });
}
function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success");
        },4000);
    });
}


//this is promise chaining
console.log("Fetching Data 1....");
let promise1=async();
promise1.then((res)=>{    //merge 21 and 22 line by using async().then((res)=>{...});
    console.log(res);
    console.log("Fetching Data 2....");
    let promise2=async2();
    promise2.then((res2)=>{
        console.log(res2);
    });
});

// console.log("Fetching Data 2....");
// let promise2=async2();
// promise2.then((res)=>{
//     console.log(res);
// }); 

//instead we will use promise chaining


