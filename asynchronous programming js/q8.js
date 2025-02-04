function repeatFunction(fn,interval){
    fn();
    const intervalId=setInterval(fn,interval);
    return function stopExecution(){
        clearInterval(intervalId);
        console.log("Execution Stopped");
    };
}

function printMessage(){
    console.log("Executing the function....");
}

const stopExecution=repeatFunction(printMessage,1000);

setTimeout(()=>{
    stopExecution();
},4000);
