// this In a function definition, this refers to the "owner" of the function.

// When used alone, this refers to the Global object. In a browser the Global object is [object Window]:
function myFunction() {
  return this; // refers to the owner which global object
}


// In strict mode, this will be undefined, because strict mode does not allow default binding:
function second() {
  'use strict';
  return this;
}

console.log(second() === global) // false
console.log(second() === undefined) // true

function third() {
  console.log(this.fName + ' ' + this.lName);
}

let customer1 = {
  fName: "sasa",
  lName: "sss",
  print: third
}

let customer2 = {
  fName: "sasa2",
  lName: "sss2",
  print: third
}

customer1.print()
customer2.print()


// this refers to the person object.
// The person object "owns" the fullName method.
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

