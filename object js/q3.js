function getObjectLength(obj){
    return Object.keys(obj).length;
}

var student={
    name:"John",
    scalss:"VI",
    rollno:12
};

var emptyObj={};

console.log(getObjectLength(student)); 
console.log(getObjectLength(emptyObj)); 