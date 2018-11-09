// Global variables can be made local (private) with closures.
// Variables created without the keyword var, are always global, even if they are created inside a function
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. 


// function showName(firstName, lastName) {
//   var nameIntro = "Your name is ";
//   //  this inner function has access to the outer function's variables, including the parameter
//   function makeFullName() {
//     return nameIntro + firstName + " " + lastName;
//   }
//   return makeFullName();
// }
// // showName ("Michael", "Jackson");

(function () {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter)
    return counter;
  }
}())();


// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

// function goCreateClosure(name) {
//   return function () {
//     console.log('name is ' + name)
//   }
// }

// goCreateClosure('ahmed')()


// function printName(f, l) {
//   const d = "your name is ";
//   function concNames() {
//     return d + f + l;
//   }
//   return concNames()
// }

// console.log(printName('fff', 'sssss'))
