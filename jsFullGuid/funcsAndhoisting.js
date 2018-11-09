// Arrow syntax automatically binds this to the surrounding code’s context
// Arrow functions must be defined before they are used. so it can't be hoisted
// Using const is safer than using var, because a function expression is a constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement.

const a = () => console.log(1 + 2);

// function decleration are hoisted to the top of the page
/// IIFE => imediately invoked function expresion
(function () {
  console.log('IIFE => imediately invoked function expresion')
})()


// Variables defined with var are hoisted to the top. (Js Hoisting)
// You can use a variable before it is declared:
// Using a let or const variable before it is declared will 
// result in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until it is declared:

console.log(X);
var X = 2;

// *-------------------------------- hoisting func ----------------------------*

myFunction(4);

function myFunction(num) {
  console.log(num)
}