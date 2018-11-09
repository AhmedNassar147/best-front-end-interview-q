
let x = 10;
let f = 20;

function scopeTest() {
  // this func local scop
  let c = 10;
  console.log('x inside parent func ' + x)
  f = '20bb'; // change f value
  console.log('f inside parent func ' + f)
  if (x != "") {
    // here can see the global scope and local one
    console.log('x inside if ' + x)
    console.log('c inside if ' + c)
    let t = 10;
  }
  // console.log(t) can't be reached because it in local scope
}

scopeTest()



// Scope determines the accessibility (visibility) of variables.

// 1- Local scope  2- Global scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.

// With JavaScript, the global scope is the JavaScript environment.
// In HTML, the global scope is the window object.
// Global variables defined with the var keyword belong to the window object:

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();
// code here can use carName 
function myFunction() {
  carName = "Volvo";
}

// Global variables are not created automatically in "Strict Mode".
// Do NOT create global variables unless you intend to.

// The lifetime of a JavaScript variable starts when it is declared.
// Local variables are deleted when the function is completed.
// In a web browser, global variables are deleted when you close the browser window (or tab), but remain available to new pages loaded into the same window.
// Before ES2015 JavaScript had only two types of scope: Global scope and Function scope. 
// Block Scope (inside brackets {} scope), a variable is only visible in the block where it is defined.

// The var statement allows you to declare a variable with global scope or function scope.
// The let statement allows you to declare a variable with block scope.
