export const config={
    mode:'production',
    debug:false,
};

export function logMessage(message){
    if(config.debug){
        console.log(`[DEBUG] ${message}`);
    }
    else{
        console.log(message);
    }
}
