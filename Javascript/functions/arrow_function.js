//Arrow Function

const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greet("John");
  
  //Arrow functions provide a concise syntax for defining functions. They are commonly used for short functions or as callbacks.

  // Arrow function without parameters
const sayHello = () => {
  console.log('Hello!');
};

// Arrow function with parameters and a return statement
const addNumbers = (a, b) => {
  return a + b;
};

// Arrow function with a single parameter
const square = x => x * x;

// Arrow function with multiple parameters and implicit return
const multiply = (a, b) => a * b;