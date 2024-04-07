function Calculator() {
  this.total = 0;
}

class ArithmeticError extends Error { 
  constructor(message) {
    super(message);
    this.name = "ArithmeticError";
  }
}

class BadRequestError extends Error { 
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
  }
}

Calculator.prototype.add = function(number) {
  return this.total += number;
}

Calculator.prototype.subtract = function(number) {
  return this.total -= number;
}

Calculator.prototype.multiply = function(number) {
  return this.total *= number
}

Calculator.prototype.divide = function(number) {
  if(number === 0) {
    throw new ArithmeticError('Number cannot be 0');
  }
  return this.total /= number
}