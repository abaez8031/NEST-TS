// public methods - can be called anywhere, anytime
// private methods - can only be called by other methods inside of the class
// protected methods - can be called by methods in this class or child class

class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep")
  }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom vroom")
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk()
  }
}

const car = new Car(4, "red");
car.startDrivingProcess()