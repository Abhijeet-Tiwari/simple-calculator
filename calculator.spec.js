//test suite
//Suite --->  Group of tests

describe('Calculator.js', function() {
  //test cases
  it('should add number to the total', function() { 
    //5+5 = 10
    // expect(5+5).toBe(10);
    const calculator = new Calculator();
    expect(calculator.total).toBeFalsy();
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

  // toBe() Matcher(===)
  it('should beBe Matcher', function() {
    const calculator = new Calculator();
    // let person1 = {name: 'John', age:20};
    // let person2 = {name: 'John', age:20};
    // expect(person1).toBe(person2); // false  
    // expect(person1.name).toBe(person2.name); // true
     expect(calculator.total).toBe(0);
  })

  // toEqual() Deep equal comparison
  it('should toEqual and toTruthy Matcher', function() {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).toBeTruthy();
    // expect(calculator1).toBe(calculator2); // false
    expect(calculator1).toEqual(calculator2); // true
  })

  // not (behaves as negative matcher)
  it('should not matcher', function() {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2);
  });

  //toBeUndefined & toBeDefined
  it('should toBeUndefined and toBeDefined matcher', function() {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.subtract).not.toBeUndefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).toBeDefined();
  });

  // toBeNull
  it('should toBeNull matcher', function() {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  // toBeContain 
  //expect(array/string).toContain(element/'substring');
  it('should toContain matcher', function() {
    const calculator = new Calculator();
    let arr = [1,2,3,4];
    expect(arr).toContain(4);
    expect(calculator.constructor.name).toContain('Cal');
  });

});