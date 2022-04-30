function Vehicle() {
 this.wheels = 4;
 this.fuel = "Gas";
}

//Vehicle.LIMIT = 200;

Vehicle.prototype.startEngine = function() { console.log("starting vehicle engine");}
Vehicle.prototype.drive = function(){
  console.log("driving some random vehicle");
}


function Motorcycle() {
  Vehicle.call(this);
  //this.wheels = 2;
 }

 Motorcycle.prototype = Object.create(Vehicle.prototype);
//  Motorcycle.prototype.drive = function() {
//   console.log("driving a motorcycle");
// }

function Car() {
  Vehicle.apply(this);
  //this.wheels = 4;
 }

 Car.prototype = Object.create(Vehicle.prototype);
//  Car.prototype.drive = function() {
//   console.log("driving a car");
// }

 var myMoto = new Motorcycle();
 //console.log(myMoto);

 var myCar = new Car();
 console.log(myCar);

 console.log(Car.prototype);
 console.log(myMoto);

 console.log(Car.prototype == Object.getPrototypeOf(myCar));

 console.log(Car.toString());
