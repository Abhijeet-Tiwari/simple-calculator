//test suite
//Suite --->  Group of tests

describe('Calculator.js', function() {
    //test cases
  describe('Calculator', function() { 
    let calculator;
    beforeEach(function() {
      //executes before execution of each spec in the suite
      calculator = new Calculator();
    });

    afterEach(function() {
      //executes after execution of each spec in the suite
      //used for clean up
     });

    describe('add', function() {
      it('should add number to the total', function() { 
        //5+5 = 10
        // expect(5+5).toBe(10);
        expect(calculator.total).toBeFalsy();
        calculator.add(5);
        //expect total to be 5
        expect(calculator.total).toBe(5);
      });
    });
    
    describe('subtract', function() {
      it('should subtract number from the total', function() {
        calculator.total = 30;
        calculator.subtract(5);
        //expect total to be 5
        expect(calculator.total).toBe(25);
      });
    });

    describe('multiply', function() {
      it('should multiply number to the total', function() {
        calculator.total = 30;
        calculator.multiply(5);
        //expect total to be 5
        expect(calculator.total).toBe(150);
      });      
    });

    describe('divide', function() {
      it('should divide number from the total', function() {
        calculator.total = 30;
        calculator.divide(6);
        //expect total to be 5
        expect(calculator.total).toBe(5);
      });
    });

    describe('Jasmine Matchers', function() {
      // toBe() Matcher(===)
      it('should beBe Matcher', function() {
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
        expect(calculator.add).not.toBeUndefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
      });

      // toBeNull
      it('should toBeNull matcher', function() {
        
        calculator.total = null;
        expect(calculator.total).toBeNull();
      });
    
      // toBeContain 
      //expect(array/string).toContain(element/'substring');
      it('should toContain matcher', function() { 
        let arr = [1,2,3,4];
        expect(arr).toContain(4);
        expect(calculator.constructor.name).toContain('Cal');
      });

      //toBeNaN()
      it('should toBeNaN matcher', function() {
        calculator.total = 10;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN();
      });

      //toThrow() 
      it('should toThrow matcher', function() {
        calculator.total = 10;
        // expect(function() { calculator.divide(0) }).toThrow();
        expect(function() { calculator.divide(0);}).toThrow(new Error('Number cannot be 0'));
      });

      //toThrowError() 
      it('should toThrowError matcher', function() {
        calculator.total = 10;
        expect(function() { calculator.divide(0) }).toThrowError();
        expect(function() { calculator.divide(0) }).toThrowError(ArithmeticError, 'Number cannot be 0');
        expect(function() { calculator.divide(0);}).toThrowError('Number cannot be 0');
      });
    
      //toMatch(regex) 
      it('should toMatch matcher', function() {
        calculator.total = 10;
        calculator.add(10);
        expect(calculator.total).toMatch(/-?\d+/);
      });

    })

    describe('Jasmine.anything matchers', function() { 
      //jasmine.anything() 
      it('should anything matcher', function() {
        calculator.total = 10;
        expect(calculator.total).toEqual(jasmine.anything());
      });
    
      //jasmine.any(class) checks for types like class object, number, string
      it('should any matcher', function() {
        calculator.total = 10;
        expect(calculator).toEqual(jasmine.any(Object));
        expect(calculator.total).toEqual(jasmine.any(Number));
      });
    
       //jasmine.objectContaining({key: value}) checks for object keys and values.
       it('should objectContaining matcher', function() {
        calculator.total = 10;
        expect(calculator).toEqual(jasmine.objectContaining({total: 10}));
      });
    });

    describe('Custom matcher', function() {
      //CustomMatcher
      it('should test CustomMatcher', function() {
        jasmine.addMatchers(CustomMatcher);
        expect(calculator).toBeCalculator();
      });
    });  
  })
});