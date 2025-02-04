function isError(input){
    return input instanceof Error || toString(input)==='[object Error]';
}
console.log(isError(new Error('foo')));
console.log(isError(100));
console.log(isError('foo'));