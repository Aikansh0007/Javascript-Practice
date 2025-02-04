function errInt(num){
    if(!Number.isInteger(num)){
        throw new Error('Invalid number');
    }
    console.log('Number is valid : ',num);
}

try{
    errInt(10);
    errInt(12.12);
}
catch(error){
    console.log('Error : ',error.message);
}