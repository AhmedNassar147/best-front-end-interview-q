# Coding Questions:

*Question: What is the value of `foo`?*
 var foo = 10 + '20'; =>  <!-- '1020' -->

*Question: What will be the output of the code below?*
 console.log(0.1 + 0.2 == 0.3);  <!--  false -->

*Question: How would you make this work?*
add(2, 5); <!-- const func = (a,b) => console.log(a+b);  console.log(func(2,5)) -->
add(2)(5); <!-- const func = a => b => console.log(a+b)  console.log(func(2)(5)) -->

*Question: What value is returned from the following statement?*
"i'm a lasagna hog".split("").reverse().join(""); <!-- "goh angasal a m'i" -->

*Question: What is the value of `window.foo`?*
( window.foo || window.foo = "bar" ) ); <!-- bar -->

*Question: What is the outcome of the two alerts below?*
var foo = "Hello";
(function() {
  var bar = "World";
  alert(foo + bar); // this will work
})();
alert(foo + bar); // this will not working because bar here not defined yet

*Question: What is the value of `foo.length`?*
var foo = []; foo.push(1); foo.push(2); <!-- 2 -->

*Question: What is the value of `foo.x`?*
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2}; <!-- undefiend -->

*Question: What does the following code print?*
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three'); <!-- one three two -->


* Make this work:
```javascript
duplicate([1,2,3,4,5]);

function duplicate(arr) { 
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i])
  }
  newArr = [...newArr, ...arr]
  console.log(newArr)
}
duplicate([1, 2, 3, 4])
```

<!-- // /////////////////// -->


* Explain event delegation
    `it allows you to avoid adding event listeners to specific nodes; but just to one parent.That event listener analyzes bubbled events to find a match on child elements like:`
    `<ul id="parent-list">
        <li id="post-1">Item 1</li>
        <li id="post-2">Item 2</li>
        <li id="post-3">Item 3</li>
        <li id="post-4">Item 4</li>
        <li id="post-5">Item 5</li>
        <li id="post-6">Item 6</li>
    </ul>`
    `document.getElementById("parent-list").addEventListener("click", function(e) {
        if(e.target && e.target.nodeName == "LI") {
            console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        }
    })`

* Describe event bubbling.
    `When a user clicks the button the event first fires on the button itself, then bubbles up to the parent div, until it finally reaches the document.`

* What's a typical use case for anonymous functions?
  1- `assign function to variable`
  2- `(function() { })();`

* How do you organize your code? 
  `(module pattern, classical inheritance?)`

* What's the difference between host objects and native objects?
    `Host objects: window, XmlHttpRequest, DOM nodes they biult in browser environment`
    2- native objects => `String Date, Math, String, Array it's built in js`


* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
    1- `declaring a constructor function` 
    2- assign the function person to variable person 
    3- intialize a new instacne of person class and it's datatype object 

* Explain `Function.prototype.bind`.
  `The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.`


* What's the difference between an "attribute" and a "property"?
    `attributes are defined by HTML. Properties are defined by DOM.`

* Difference between `document load` event and document `DOMContentLoaded` event?
    1-DOMContentLoaded: `the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may be not yet loaded`.
    2-load: `the browser loaded all resources (images, styles etc)`.


* Explain the difference between mutable and immutable objects.
    1- `Mutable objects have fields that can be changed`, 
    2- `immutable objects have no fields that can be changed after the object is created`

* Explain the difference between synchronous and asynchronous functions.
    `Synchronous program execution waits until that function returns before continuing to the next line of code.`
    
    `Asynchronous execution avoids this bottleneck. You are essentially saying, “I know this function call is going to take a great deal of time, but my program doesn’t want to wait around while it executes.”`



* What is the definition of a higher-order function?
    1. `takes one or more functions as arguments`
    2. `returns a function as its result.`


* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
   1-spreed: `is used for destructuring arrays and objects.`
    2-rest parameter syntax allows us to represent an indefinite number of arguments as an array.
    `const sum = (...theArgs)  => {
      return theArgs.reduce((previous, current) => {
        return previous + current;
      });
    }
    console.log(sum(1, 2, 3));`

* promises ? 
  `is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:`
     a- `Fulfilled: onFulfilled() will be called (e.g., resolve() was called)`
     b- `Rejected: onRejected() will be called (e.g., reject() was called)`
     c- `Pending: not yet fulfilled or rejected A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.`

