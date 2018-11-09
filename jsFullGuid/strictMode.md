// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

// "use strict";
// x = {p1:10, p2:20};      // This will cause an error
// x = 3.14;  => this will occure an error

// Deleting a variable (or object) is not allowed. =>  var x = 3.14;  delete x;   // This will cause an error
// Duplicating a parameter name is not allowed: => function x(p1, p1) {};   // This will cause an error

// Writing to a read-only property is not allowed:
var obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14;   // This will cause an error

// The string "eval" cannot be used as a variable: => var eval = 3.14;         // This will cause an error
// The string "arguments" cannot be used as a variable: => var arguments = 3.14;    // This will cause an error
