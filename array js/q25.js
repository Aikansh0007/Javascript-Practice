class Person{
    constructor(name,title,ID){
        this.name=name;
        this.title=title;
        this.ID=ID;
    }
    display(){
        console.log(`Name: ${this.name}, Title: ${this.title}, ID: ${this.ID}`);
    }
}

obj1=new Person('Bill Gates','The Road Ahead',1254);
obj2=new Person('Steve Jobs','Walter Isaacson',4264);
obj3=new Person('Suzanne Collins','Mockingjay:The Final Book of The Hunger Games',3245);

const obj=[obj1,obj2,obj3];

obj.sort((a,b)=>a.title.localeCompare(b.title));

for(var i=0;i<obj.length;i++){
    obj[i].display();
}