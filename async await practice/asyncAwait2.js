function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data : ",dataId);
            resolve("Success");
        },2000);
    });
}

//Async-Await
async function getAllData(){
    console.log("Getting Data : ");
    await getData(1);
    console.log("Getting Data : ");
    await getData(2);
    console.log("Getting Data : ");
    await getData(3).then((res)=>{
        console.log(res);
    });
}

getAllData();

//IIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION use (function)(); to call the functio  directly without writing the line everytime

(async function (){//IIFE has no name
    console.log("Getting Data : ");
    await getData(1);
    console.log("Getting Data : ");
    await getData(2);
    console.log("Getting Data : ");
    await getData(3).then((res)=>{
        console.log(res);
    });
})();