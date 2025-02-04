function allKeys(obj){
    var keys=[];
    for(var key in obj) keys.push(key);
    return keys;
}
function Student(name){
    this.name=name;
}
Student.prototype.rollno=12;

console.log(allKeys(new Student("Aikansh")))