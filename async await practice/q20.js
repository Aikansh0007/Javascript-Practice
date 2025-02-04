async function retryWithDelay(asyncFunction,retries,delay){
    for(let attempt=1;attempt<=retries;attempt++){
        try{
            return await asyncFunction();
        }
        catch(error){
            console.error(`Attempt ${attempt} failed with error:`,error.message);

            if(attempt===retries){
                throw new Error('All retries failed');
            }
            await new Promise((resolve)=> setTimeout(resolve,delay*attempt));
        }
    }
}
const simulateAsyncTask=async()=>{
    if(Math.random()>0.9){
        return 'Success';
    }else{
        throw new Error('Random Failure');
    }
};

retryWithDelay(simulateAsyncTask,5,1000)
.then((result)=> console.log('Operation Succeeded:', result))
.catch((error)=> console.log('Operation Failed: ',error.message));
