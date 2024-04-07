const CustomMatcher = {
  toBeCalculator: function() {
    return {
      compare: function(actual, expected) { 
        const result = {
          pass: true,
          message: ''
        }
        if(actual instanceof Calculator) { 
          result.pass = true;
        } else {
          result.pass = false;
          result.message = `expected ${actual} to be instance of Calculator`
        }

        return result;
      }
    }
  }
}