class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const Person1=new Person('Aikansh',22,'India');
const Person2=new Person('Kartik',20,'Dehradun');
Person1.displayDetails();
console.log("\n");
Person2.displayDetails();


