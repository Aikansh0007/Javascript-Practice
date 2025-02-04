function retPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello");
            resolve("success");
        },1000);
    });
}

retPromise().then((res)=>{
    retPromise().then((res)=>{
        console.log(res);
    });
});

