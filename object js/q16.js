function invertObj(obj){
    const inverted={};
    for(const [key,value] of Object.entries(obj)){
        inverted[value]=key;
    }
    return inverted;
}

const Student={
    name:"Aikansh",
    age:22,
    profession:"Engineer",
};
console.log(invertObj(Student));