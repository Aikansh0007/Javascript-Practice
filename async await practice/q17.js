function asyncOper(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Async operation completed")
        },3000);
    });
}

(async function(){
    console.log('Loading....');
    const result=await asyncOper();
    console.log(result);
})();
