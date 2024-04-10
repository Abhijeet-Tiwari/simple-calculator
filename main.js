function calculate(event) {
  const inputValue = event.target.value;
  const expression = /\+|\-|\*|\//;
  const numbers = inputValue.split(expression);
  const numberA = +numbers[0];
  const numberB = +numbers[1];
  const operation =  inputValue.match(expression);
  if(isNaN(numberA) || isNaN(numberB) || operation === null) {
    updateResult('Opeartion not recognised!');
    return;
  }
  const operator = inputValue.match(expression)[0];
  
  const calculator = new Calculator();
  calculator.add(numberA);
  let result;
  switch (operator) {
    case '+': result = calculator.add(numberB); break;
    case '-': result = calculator.subtract(numberB); break;
    case '*': result = calculator.multiply(numberB); break;
    case '/': result = calculator.divide(numberB); break;
    default: result = 'Opeartion not recognised!';
  }

  updateResult(result);
}

function updateResult(result) { 
  let element = document.getElementById('result');
  if(element) {
    element.innerText = result;
  }
}

document.getElementById("inputValue") && document.getElementById("inputValue").addEventListener('change', calculate);