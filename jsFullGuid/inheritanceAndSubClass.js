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
}


class SportCar extends Car {
  constructor(name, color, modal, month) {
    super(name, color, modal);  // must  call parent
    this.month = month;
  }

  revEngine() {
    console.log(this.name, 'gooo voooom');
  };

}

let mySportCar = new SportCar('audi', 'green', '78kj9', 'jan')
console.log(mySportCar.printDate())
console.log(mySportCar)
mySportCar.revEngine()
console.log(mySportCar.month)
