function findAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter(function(property){
        return typeof obj[property]==='function';
    });
}

console.log(findAllMethods(Math));

function all_properties(obj){
    return Object.getOwnPropertyNames(obj);
}
console.log(all_properties(Math));