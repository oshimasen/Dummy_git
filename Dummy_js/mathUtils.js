function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  const math = require('./mathUtils');

  test('multiply 2 * 3', () => {
    expect(math.multiply(2, 3)).toBe(6); // Will fail with buggy multiply
  });
  
  
  module.exports = { add, subtract, multiply };
  