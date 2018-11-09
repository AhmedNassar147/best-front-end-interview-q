
// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.

function Car(name, color, modal) {
  // The this keyword in the constructor does not have a value.
  // The value of this will be the new object created when the function is invoked.
  this.name = name;
  this.modal = modal;
  this.color = color;
}

let myCar = new Car('bmw', 'red', '451o');
console.log(myCar)