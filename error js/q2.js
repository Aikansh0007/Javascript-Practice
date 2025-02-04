try{
    const undefinedObj=undefined;
    console.log(undefinedObj.property);
}
catch(err){
    if(err instanceof TypeError){
        console.log("TypeError: Cannot read property 'property' of undefined");
    }
    else{
        throw err;
    }
}