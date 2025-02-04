function callback(arg1,arg2,callback){
    setTimeout(()=>{
        const res=arg1+arg2;
        if(res%2!==0)
            callback(null,res);
        else
        callback(new Error('Result is not Odd'),null);
    },2000);
}

function promisify(arg1,arg2){
    return new Promise((resolve,reject)=>{
        callback(arg1,arg2,(error,result)=>{
            if(error)
                reject(error);
            else
                resolve(result);
        });
    });
}

promisify(2,3)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error.message);
});

promisify(2,4)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error.message);
});



