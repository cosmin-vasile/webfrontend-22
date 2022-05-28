class Motor {
  _running = false;

  constructor() {

  }

  start() {
    this._running = true;
  }

  stop() {
    this._running = false;
  }

  isRunning() {
    return this._running;
  }
}

class Motor8Valve extends Motor {
  constructor() {
    super();
  }
}

class Motor16Valve extends Motor {
  constructor() {
    super();
  }
}

class Vehicle {
  name = '';
  motor = {};

  constructor(name, Motor) {
    this.name = name;
    this.motor = Motor;
  }

  drive() {
    this.motor.start();
  }

  stopDriving() {
    this.motor.stop();
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, new Motor8Valve());
  }
}

class Bus extends Vehicle {
  constructor(name) {
    super(name, new Motor16Valve());
  }
}

class Highway {
  vehicles = [];

  constructor() {

  }

  driveOnHighway(Vehicle) {
    console.log(`${Vehicle.name} is entering the Highway`);
    this.vehicles.push(Vehicle);

    Vehicle.drive();
    if (Vehicle.motor.isRunning()) {
      console.log(`${Vehicle.name} is driving`);
    } else {
      console.log(`${Vehicle.name} is not driving`);
    }
  }
}

const a1 = new Highway();
const toyota = new Car('Toyota');
const dacia = new Car('Dacia Spring');
const schoolBus = new Bus('School Bus');
a1.driveOnHighway(toyota);
a1.driveOnHighway(dacia);
a1.driveOnHighway(schoolBus);
