class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    displayDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors=doors;
    }
    displayDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }
}

const myCar=new Car('Toyota','Camry',2015,4);
myCar.displayDetails();

const myVehicle=new Vehicle('Honda','Civic',2019);
myVehicle.displayDetails();