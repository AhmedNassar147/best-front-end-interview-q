// Math.PI;            // returns 3.141592653589793

/////////////////////////////////////// math //////////////////////////////
// Math.round(4.7);    // returns 5
// Math.round(4.4);    // returns 4
// Math.ceil(4.4);     // returns 5

// Math.floor(4.7);    // returns 4

// Math.pow(8, 2);      // returns 64

// Math.sqrt(64);      // returns 8

// Math.abs(-4.7);     // returns 4.7

// Math.min(0, 150, 30, 20, -8, -200);  // returns -200
// Math.max(0, 150, 30, 20, -8, -200);  // returns 150

// Math.random(); // always return number between 1 and 0

// Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
// Math.floor(Math.random() * 100);      // returns a random integer from 0 to 99

// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

// *--------------------------------- numbers *-------------------

Number(new Date("2017-09-30"));    // returns 1506729600000
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number("10 20");       // returns NaN 
Number("John");        // returns NaN


console.log(20 + 30 + 'ahmed' + (20 + 30)) // 50ahmed50


Number(0.2 + 0.1 === 0.3)  // 0 = false
var z5 = ("100" / "10");  // z will be 10
var x6 = 100 / "10";     // x will be 10
var x7 = 100 / "Apple";  // x will be NaN (Not a Number)

console.log(5 + NaN); // NaN

2 < 12  // true
"2" < "12" // false
2 < "John" // false

// The unary + operator can be used to convert a variable to a number: 
// var y = "5";      // y is a string
// var x = + y;      // x is a number
