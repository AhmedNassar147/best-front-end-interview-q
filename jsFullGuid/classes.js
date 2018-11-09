// class decleration

class Car {
  constructor(name, color, modal) {
    this.name = name;
    this.modal = modal;
    this.color = color;
  }

  printDate() {
    console.log(`${this.name} ${this.modal}  ${this.color}`)
  }

  // static means we can reach out to senHello without intialize new instance of Car
  static sendHello(name) {
    console.log('hello ' + name)
  }
}

// let myCar = new Car('bmw', 'blue', '451o');
// console.log(myCar)
// console.log(myCar.printDate())


// call static method but just from the original class

Car.sendHello('ahmed') // hello ahmed

