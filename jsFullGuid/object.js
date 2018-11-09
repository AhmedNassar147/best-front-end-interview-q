let car = {
  make: 'bmw',
  year: '2010',
  price: function () {
    return 5000;
  },
  printDesc: function () {
    console.log(this.make + ' ' + this.year + ' ' + this.price());
  }
}

console.log(car.printDesc())


let myobj = {};

myobj.create = function () {
  return "create my car"
};
console.log(myobj.create())

// check if object is not empty
// if (typeof myObj !== "undefined" && myObj !== null)
