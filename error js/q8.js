function urim(uri){
    try{
        decodeuri=decodeURI(uri);
        console.log("Decoded Uri : "+decodeuri);
    }
    catch(error){
        if(error instanceof URIError){
            console.log("Invalid Uri");
        }
        else{
            console.log("error:"+error.message);

    }
}
}
urim('https://example.com/%%invalidURI')