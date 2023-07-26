//Callback Function

function process(callback) {
    // Perform some operation
    callback();
  }
  
  function callbackFunction() {
    console.log("This is a callback function.");
  }
  
  process(callbackFunction);

  //Callback functions are functions that are passed as arguments to other functions and are invoked later, often in response to an event or asynchronous operation.