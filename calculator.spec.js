//test suite
//Suite --->  Group of tests

describe('Calculator.js', function() {
  //test cases
  it('should add number to the total', function() { 
    //5+5 = 10
    // expect(5+5).toBe(10);
    const calculator = new Calculator();
    calculator.add(5);
    //expect total to be 5
    expect(calculator.total).toBe(5);
  });
  it('should subtract number from the total', function() { 
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);
    //expect total to be 5
    expect(calculator.total).toBe(25);
  });
  it('should multiply number to the total', function() {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.multiply(5);
    //expect total to be 5
    expect(calculator.total).toBe(150);
   });
  it('should divide number from the total', function() { 
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.divide(6);
    //expect total to be 5
    expect(calculator.total).toBe(5);
  });
});