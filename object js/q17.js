function checkProperties(obj,property){
    return Object.getOwnPropertyNames(obj).includes(property);
}

const Student={
    name:"Aikansh",
    age:22,
    profession:"Engineer",
};

console.log(checkProperties(Student,"age"));


