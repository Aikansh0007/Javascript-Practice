function retPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello");
            reject("failed");
        },1000);
    });
}

retPromise().catch((err)=>{
    console.log(err);
});