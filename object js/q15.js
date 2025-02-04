function keyValue(obj){
    return Object.entries(obj);
}
const Student={
    name:"Aikansh",
    age:22,
    profession:"Engineer",
};

console.log(keyValue(Student));
