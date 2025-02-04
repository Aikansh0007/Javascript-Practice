function cancellablePromise(executor){
    let cancel;
    const promise= new Promise((resolve,reject)=>{
        cancel=()=>{
            reject(new Error('cancelled'));
        };
        executor(resolve,reject);
    });

    return{
        promise,
        cancel
    };
}

const{promise,cancel}=cancellablePromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Task Completed');
    },5000);
});

setTimeout(()=>{
    cancel();
},2000);

promise.then(result=>console.log(result))
.catch(error=>console.log(error.message));
