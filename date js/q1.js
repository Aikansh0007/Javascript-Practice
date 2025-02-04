function isDate(input){
    return input instanceof Date && !isNaN(input);
}

console.log(isDate(new Date()));
console.log(isDate("2025-01-28"));