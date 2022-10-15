//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class Car extends VehicleModele{
    constructor(make,model,year,color,millage){
        super(make,model,year,color,millage);
        this.maxPassangers = 5;
        this.passanger=0;
        this.numberOfWheels = 4;
        this.maxSpeed =160;
        this.fuel=10;
        this.scheduleService = false;

    }

    
 loadPassanger(num){
    if(this.passanger < this.maxPassanger){
        this.passanger = num;
        return this.passanger;
    } else{
        console.log(this.model + " " + this.make + "is full");

    }

 }
 start(){
    if(this.fuel>0){console.log("Engine has started!!!");
return this.started = true
} else{
console.log("no fuel");
return this.started = false;
}
}

 scheduleService(){
    if (this.milage >30000){
        this.scheduleService =true
        return this.scheduleService;
    }
}

}
let myCar = new Car('Mercury','Sedan', '2013', 'white', 50000)

myCar.start()
myCar.loadPassanger(5)
myCar.stop()
myCar.checkService()
console.log(myCar)

//this shows how to call from this module...
let v= new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
 