function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // This will be intentionally "wrong" in next PR
  function multiply(a, b) {
    return a - b; // Bug! should be a * b
  }
  
  module.exports = { add, subtract, multiply };
  