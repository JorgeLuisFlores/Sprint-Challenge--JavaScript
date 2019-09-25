// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

console.log(consume(2, 2, add));
console.log(consume(10, 16, multiply));
console.log(consume("Mary", "Poppins", greeting));

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: "nestedfunction()" can call on it's parent function "myFunction()" which in turn grants it accsess to the parent's scope plus the global scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

/*
Self Study Questions


Describe the biggest difference between.forEach & .map.
.forEach exceutes a function on each array property.
.map will return a new array with the results of the function it has executed on the former array.

What is the difference between a function and a method?
A function takes parameters and pushes it back as an output. This data is usually given to a function.
Method does virtually the same thing but is usually contained within an Object to act as a way of getting results based on the parameters within the object.

What is closure?
Is usually 2 functions with one being an external function that can be accessed by an inner function.
The inner function can be used to store the output of the external function for later use once the inner function is called upon.

Describe the four rules of the 'this' keyword.
Rule 1: Window Binding is when a function is contained in the global scope, the value of THIS will be that of the window object which contains Javascript as a language.

Rule 2: Implicit Binding states is if a function is called by a preceding ., the object before that . is THIS.

Rule 3: New Binding is when a constructor function is used, THIS will refer to the specific instance of the object that is created and returned by the constructor function.

Rule 4: Explicit Binding is when JavaScript's call or apply method is used, this is explicitly defined.


Why do we need super() in an extended class?
Super() is the easiest way to pass a method from an original parent class over to it's child class.


*/